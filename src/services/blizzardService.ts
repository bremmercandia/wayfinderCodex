import {
  blizzardConfig,
  buildBlizzardPath,
  isLiveApiEnabled,
} from "@/config/blizzard.config";

/**
 * Isolated REST layer for Blizzard's WoW Classic data (option C: hybrid).
 *
 * Curated data in `src/data/*` is the source of truth for every guide. This
 * service is only used when a server-side proxy is configured through
 * `VITE_BLIZZARD_API_BASE`: the proxy owns the OAuth client credentials, this
 * module never sees a secret and never ships one to the browser.
 *
 * With no proxy configured every call resolves to `null` immediately - no
 * network request, no token, fully static behaviour - and the UI keeps showing
 * the curated dataset.
 */
export interface RealmStatus {
  name: string;
  slug: string;
  type: string;
  population?: string;
  status?: boolean;
}

interface BlizzardEntity {
  id: number;
  name: string;
}

const cache = new Map<string, unknown>();

const requestJson = async <T>(
  resource: string,
  params?: Record<string, string | number>,
): Promise<T | null> => {
  if (!isLiveApiEnabled()) {
    return null;
  }

  const path = buildBlizzardPath(resource);
  const url = new URL(`${blizzardConfig.apiBase.replace(/\/+$/, "")}/blizzard${path}`);
  url.searchParams.set("region", blizzardConfig.region);
  url.searchParams.set("locale", blizzardConfig.locale);

  for (const [key, value] of Object.entries(params ?? {})) {
    url.searchParams.set(key, String(value));
  }

  const cacheKey = url.toString();
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) as T;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), blizzardConfig.timeoutMs);

  try {
    const response = await fetch(cacheKey, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as T;
    cache.set(cacheKey, payload);
    return payload;
  } catch {
    // Live data is an optional enrichment: any failure keeps curated data.
    return null;
  } finally {
    clearTimeout(timeout);
  }
};

/** Realm/status for the configured region, or null in curated mode. */
export const getRealmStatus = (): Promise<RealmStatus[] | null> =>
  requestJson<RealmStatus[]>("realm/status");

/** Quest metadata (name, level, giver) keyed by id, or null in curated mode. */
export const getQuestMetadata = async (
  ids: number[],
): Promise<BlizzardEntity[] | null> => {
  if (ids.length === 0) return null;
  return requestJson<BlizzardEntity[]>("quest", { ids: ids.join(",") });
};

/** Item metadata (name, quality, icon) keyed by id, or null in curated mode. */
export const getItemMetadata = async (
  ids: number[],
): Promise<BlizzardEntity[] | null> => {
  if (ids.length === 0) return null;
  return requestJson<BlizzardEntity[]>("item", { ids: ids.join(",") });
};

/** Spell metadata keyed by id, or null in curated mode. */
export const getSpellMetadata = async (
  ids: number[],
): Promise<BlizzardEntity[] | null> => {
  if (ids.length === 0) return null;
  return requestJson<BlizzardEntity[]>("spell", { ids: ids.join(",") });
};

/** Clears the in-memory response cache (used when the namespace changes). */
export const clearBlizzardCache = (): void => {
  cache.clear();
};

export { blizzardConfig, isLiveApiEnabled };