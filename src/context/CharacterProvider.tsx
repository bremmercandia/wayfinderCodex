import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { races } from "@/data/races";
import { clampLevel } from "@/lib/leveling";
import {
  addProfession,
  clampProfessionSkill,
  getProfessionById,
  getSelectionBlock,
  isProfessionSelected as isSelected,
  removeProfession,
} from "@/lib/professions";
import {
  CHARACTER_STORAGE_KEY,
  CharacterContext,
  initialCharacterState,
  isCharacterConfigured,
  type CharacterContextValue,
  type CharacterState,
} from "@/context/character-context";
import type { FactionId, ProfessionSelection, WowClassId } from "@/types/game";

const readStoredState = (): CharacterState => {
  if (typeof window === "undefined") return initialCharacterState;

  try {
    const raw = window.localStorage.getItem(CHARACTER_STORAGE_KEY);
    if (!raw) return initialCharacterState;

    const parsed = JSON.parse(raw) as Partial<CharacterState>;
    const professions: ProfessionSelection = {
      primary: (parsed.professions?.primary ?? []).filter((id) =>
        Boolean(getProfessionById(id)),
      ),
      secondary: (parsed.professions?.secondary ?? []).filter((id) =>
        Boolean(getProfessionById(id)),
      ),
    };

    return {
      faction: parsed.faction ?? null,
      raceId: parsed.raceId ?? null,
      classId: parsed.classId ?? null,
      level: clampLevel(parsed.level ?? initialCharacterState.level),
      professions,
      professionSkills: Object.fromEntries(
        Object.entries(parsed.professionSkills ?? {}).map(([professionId, skill]) => [
          professionId,
          clampProfessionSkill(Number(skill)),
        ]),
      ),
    };
  } catch {
    return initialCharacterState;
  }
};

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<CharacterState>(readStoredState);

  useEffect(() => {
    try {
      window.localStorage.setItem(CHARACTER_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Persistence is a convenience: a blocked storage must never break the app.
    }
  }, [state]);

  const setFaction = useCallback((faction: FactionId) => {
    setState((current) => {
      const race = races.find((candidate) => candidate.id === current.raceId) ?? null;
      if (race && race.faction === faction) {
        return { ...current, faction };
      }
      return { ...current, faction, raceId: null, classId: null };
    });
  }, []);

  const setRaceId = useCallback((raceId: string) => {
    setState((current) => {
      const race = races.find((candidate) => candidate.id === raceId) ?? null;
      if (!race) return current;

      const keepsClass = current.classId ? race.classes.includes(current.classId) : true;
      return {
        ...current,
        raceId,
        faction: race.faction,
        classId: keepsClass ? current.classId : null,
      };
    });
  }, []);

  const setClassId = useCallback((classId: WowClassId) => {
    setState((current) => ({ ...current, classId }));
  }, []);

  const setLevel = useCallback((level: number) => {
    setState((current) => ({ ...current, level: clampLevel(level) }));
  }, []);

  const toggleProfession = useCallback((professionId: string) => {
    setState((current) => {
      const profession = getProfessionById(professionId);
      if (!profession) return current;

      if (isSelected(current.professions, professionId)) {
        return { ...current, professions: removeProfession(current.professions, professionId) };
      }

      if (getSelectionBlock(profession, current.professions) !== null) {
        return current;
      }

      return { ...current, professions: addProfession(current.professions, profession) };
    });
  }, []);

  const setProfessionSkill = useCallback((professionId: string, skill: number) => {
    setState((current) => ({
      ...current,
      professionSkills: {
        ...current.professionSkills,
        [professionId]: clampProfessionSkill(skill),
      },
    }));
  }, []);

  const reset = useCallback(() => {
    setState(initialCharacterState);
  }, []);

  const value = useMemo<CharacterContextValue>(
    () => ({
      ...state,
      setFaction,
      setRaceId,
      setClassId,
      setLevel,
      toggleProfession,
      setProfessionSkill,
      isProfessionSelected: (professionId: string) =>
        isSelected(state.professions, professionId),
      reset,
      isConfigured: isCharacterConfigured(state),
    }),
    [
      state,
      setFaction,
      setRaceId,
      setClassId,
      setLevel,
      toggleProfession,
      setProfessionSkill,
      reset,
    ],
  );

  return <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>;
};