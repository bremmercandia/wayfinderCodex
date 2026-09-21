/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Blizzard namespace, e.g. `static-classic-us` (WoW Forever later). */
  readonly VITE_BLIZZARD_NAMESPACE?: string;
  /** Blizzard region, e.g. `us` / `eu`. */
  readonly VITE_BLIZZARD_REGION?: string;
  /** Blizzard locale, e.g. `en_US` / `pt_BR`. */
  readonly VITE_BLIZZARD_LOCALE?: string;
  /**
   * Base URL of a server-side proxy that owns the Blizzard client credentials.
   * Empty or unset = curated/static mode (no network requests).
   */
  readonly VITE_BLIZZARD_API_BASE?: string;
  /** Wowhead domain used for tooltips: `classic` / `tbc` / `wotlk`. */
  readonly VITE_WOWHEAD_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}