import type { ProfessionStanding } from "@/lib/professions";
import type { ProfessionTier, RecipeSource } from "@/types/game";

/**
 * Literal i18n keys for profession data enums. Kept as plain strings (never
 * template-built) so the i18n key scanner can see every key that is used.
 */
export const TIER_KEYS: Record<ProfessionTier, string> = {
  apprentice: "professions.tier.apprentice",
  journeyman: "professions.tier.journeyman",
  expert: "professions.tier.expert",
  artisan: "professions.tier.artisan",
};

export const SOURCE_KEYS: Record<RecipeSource, string> = {
  trainer: "professions.recipes.sourceTrainer",
  vendor: "professions.recipes.sourceVendor",
  drop: "professions.recipes.sourceDrop",
  quest: "professions.recipes.sourceQuest",
};

export const STANDING_KEYS: Record<ProfessionStanding, string> = {
  ahead: "professions.comparison.ahead",
  onTrack: "professions.comparison.onTrack",
  behind: "professions.comparison.behind",
};