import { professions } from "@/data/professions";
import type {
  Profession,
  ProfessionSelection,
  ProfessionTier,
  RecipeBand,
} from "@/types/game";

/** 2 primary professions + 3 secondary professions = 5 total, per Classic rules. */
export const MAX_PRIMARY_PROFESSIONS = 2;
export const MAX_SECONDARY_PROFESSIONS = 3;
export const MAX_PROFESSION_SKILL = 300;

export const emptyProfessionSelection = (): ProfessionSelection => ({
  primary: [],
  secondary: [],
});

export const getProfessionById = (professionId: string): Profession | null =>
  professions.find((profession) => profession.id === professionId) ?? null;

export const getProfessionsByIds = (professionIds: string[]): Profession[] =>
  professionIds
    .map((professionId) => getProfessionById(professionId))
    .filter((profession): profession is Profession => profession !== null);

/**
 * Rule of thumb used by every Classic guide: a healthy profession skill is about
 * five points per character level, capped at 300.
 */
export const getCharacterSkillTarget = (characterLevel: number): number =>
  Math.min(characterLevel * 5, MAX_PROFESSION_SKILL);

/** Clamps a profession skill input to the Classic 0-300 range. */
export const clampProfessionSkill = (skill: number): number => {
  if (Number.isNaN(skill)) return 0;
  return Math.min(Math.max(Math.round(skill), 0), MAX_PROFESSION_SKILL);
};

export const getSkillTier = (skill: number): ProfessionTier => {
  if (skill < 75) return "apprentice";
  if (skill < 150) return "journeyman";
  if (skill < 225) return "expert";
  return "artisan";
};

export type ProfessionStanding = "ahead" | "onTrack" | "behind";

/** Compares the profession skill against the character level target. */
export const getProfessionStanding = (
  skill: number,
  characterLevel: number,
): ProfessionStanding => {
  const target = getCharacterSkillTarget(characterLevel);
  if (skill >= target + 25) return "ahead";
  if (skill <= target - 25) return "behind";
  return "onTrack";
};

export interface ComparisonRow {
  characterLevel: number;
  targetSkill: number;
  tier: ProfessionTier;
}

/**
 * Comparison table between character level and ideal profession skill, centred on
 * the character's current level so the player sees the band that matters.
 */
export const getComparisonRows = (characterLevel: number, window = 5): ComparisonRow[] => {
  const from = Math.max(1, characterLevel - window);
  const to = Math.min(60, characterLevel + window);
  const rows: ComparisonRow[] = [];

  for (let level = from; level <= to; level += 1) {
    const targetSkill = getCharacterSkillTarget(level);
    rows.push({ characterLevel: level, targetSkill, tier: getSkillTier(targetSkill) });
  }

  return rows;
};

/** The band the player should be working on for a given skill value. */
export const getBandForSkill = (
  profession: Profession,
  skill: number,
): RecipeBand | null => {
  const bands = [...profession.bands].sort((left, right) => left.skillFrom - right.skillFrom);

  return (
    bands.find((band) => skill >= band.skillFrom && skill < band.skillTo) ??
    bands.find((band) => band.skillFrom >= skill) ??
    bands[bands.length - 1] ??
    null
  );
};

/** Gathering spots that fit the current character level. */
export const getGatheringSpotsForLevel = (
  profession: Profession,
  characterLevel: number,
): Profession["gatheringSpots"] =>
  (profession.gatheringSpots ?? []).filter(
    (spot) =>
      characterLevel >= spot.characterLevelRange.min &&
      characterLevel <= spot.characterLevelRange.max,
  );

/** Professions that pair with the given one and are not selected yet. */
export const getPairSuggestions = (
  profession: Profession,
  selectedIds: string[],
): Profession[] =>
  profession.pairs
    .filter((pairId) => !selectedIds.includes(pairId))
    .map((pairId) => getProfessionById(pairId))
    .filter((pair): pair is Profession => pair !== null);

export type SelectionBlock = "duplicate" | "primaryLimit" | "secondaryLimit";

/** Why a profession cannot be added to the current selection, or null when it can. */
export const getSelectionBlock = (
  profession: Profession,
  selection: ProfessionSelection,
): SelectionBlock | null => {
  const isPrimary = profession.kind === "primary" || profession.kind === "gathering";
  const bucket = isPrimary ? selection.primary : selection.secondary;

  if (bucket.includes(profession.id)) return "duplicate";
  if (isPrimary && selection.primary.length >= MAX_PRIMARY_PROFESSIONS) return "primaryLimit";
  if (!isPrimary && selection.secondary.length >= MAX_SECONDARY_PROFESSIONS) {
    return "secondaryLimit";
  }

  return null;
};

/** Immutable add. Returns the same selection when the profession is blocked. */
export const addProfession = (
  selection: ProfessionSelection,
  profession: Profession,
): ProfessionSelection => {
  if (getSelectionBlock(profession, selection) !== null) return selection;

  if (profession.kind === "secondary") {
    return { ...selection, secondary: [...selection.secondary, profession.id] };
  }

  return { ...selection, primary: [...selection.primary, profession.id] };
};

/** Immutable remove from whichever bucket holds the profession. */
export const removeProfession = (
  selection: ProfessionSelection,
  professionId: string,
): ProfessionSelection => ({
  primary: selection.primary.filter((id) => id !== professionId),
  secondary: selection.secondary.filter((id) => id !== professionId),
});

export const countSelectedProfessions = (selection: ProfessionSelection): number =>
  selection.primary.length + selection.secondary.length;

export const isProfessionSelected = (
  selection: ProfessionSelection,
  professionId: string,
): boolean =>
  selection.primary.includes(professionId) || selection.secondary.includes(professionId);