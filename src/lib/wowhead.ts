import type { Coordinates, WowheadType } from "@/types/game";
import { blizzardConfig } from "@/config/blizzard.config";

/**
 * Wowhead helpers. Entries without a verified `wowheadId` fall back to a Wowhead
 * search link instead of rendering a `data-wowhead` tooltip with a wrong id.
 */
export interface WowheadTarget {
  /** Verified Wowhead Classic id. */
  id?: number;
  /** Name used both for the fallback search and for the link label. */
  query: string;
}

export const buildWowheadUrl = (type: WowheadType, target: WowheadTarget): string => {
  const domain = blizzardConfig.wowheadDomain;

  if (target.id) {
    return `https://www.wowhead.com/${domain}/${type}=${target.id}`;
  }

  return `https://www.wowhead.com/${domain}/search?q=${encodeURIComponent(target.query)}`;
};

/**
 * Value of the `data-wowhead` attribute consumed by Wowhead's power.js.
 * Returns undefined when there is no verified id, which is what makes
 * `WowheadLink` render a plain search link instead.
 */
export const buildWowheadDataAttribute = (
  type: WowheadType,
  id?: number,
): string | undefined =>
  id ? `${type}=${id}&domain=${blizzardConfig.wowheadDomain}` : undefined;

/** `46.3, 36.0` for display. */
export const formatCoordinates = (coordinates: Coordinates): string =>
  `${coordinates.x.toFixed(1)}, ${coordinates.y.toFixed(1)}`;

/** TomTom command the player can paste in game. */
export const buildWayCommand = (coordinates: Coordinates): string =>
  `/way ${coordinates.x.toFixed(1)} ${coordinates.y.toFixed(1)}`;