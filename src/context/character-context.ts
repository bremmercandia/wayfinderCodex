import { createContext } from "react";
import type { FactionId, ProfessionSelection, WowClassId } from "@/types/game";

export interface CharacterState {
  faction: FactionId | null;
  raceId: string | null;
  classId: WowClassId | null;
  /** Character level, always clamped to 1-60. */
  level: number;
  professions: ProfessionSelection;
  /** Current profession skill per profession id (0-300). */
  professionSkills: Record<string, number>;
}

export type ProfessionToggleResult = "added" | "removed" | "blocked";

export interface CharacterContextValue extends CharacterState {
  setFaction: (faction: FactionId) => void;
  setRaceId: (raceId: string) => void;
  setClassId: (classId: WowClassId) => void;
  setLevel: (level: number) => void;
  toggleProfession: (professionId: string) => void;
  setProfessionSkill: (professionId: string, skill: number) => void;
  isProfessionSelected: (professionId: string) => boolean;
  reset: () => void;
  /** True when faction, race and class are all set. */
  isConfigured: boolean;
}

export const CHARACTER_STORAGE_KEY = "wayfindercodex.character.v1";

export const initialCharacterState: CharacterState = {
  faction: null,
  raceId: null,
  classId: null,
  level: 1,
  professions: { primary: [], secondary: [] },
  professionSkills: {},
};

export const isCharacterConfigured = (state: CharacterState): boolean =>
  Boolean(state.faction && state.raceId && state.classId);

/**
 * Shared context. The provider lives in `CharacterProvider.tsx` so this module can
 * keep exporting only plain values and helpers.
 */
export const CharacterContext = createContext<CharacterContextValue | null>(null);