# WayfinderCodex

WayfinderCodex is a fan-made leveling guide for **WoW Classic / Vanilla ("WoW Forever")**. It covers dungeons and quest chains, faction, race, and class recommendations, Hunter pets, and a complete professions guide from 1 to 300.

> Fan project, unaffiliated with Blizzard Entertainment. World of Warcraft, WoW Classic, and related names and items are trademarks of Blizzard.

## Features

### Main section: `/` (Leveling and Dungeons)

- **Character profile selector:** Choose faction, race, and class, with class and faction color badges.
- **Character level:** Set levels 1-60 with a validated number input or slider.
- **Recommended dungeons:** Filtered dynamically by level range and faction, including faction-exclusive dungeons and wings.
- **Dungeon quest guides:** Curated quests with NPCs, zones, coordinates, prerequisites, ordered chains, objectives, and rewards.
- **`/way` coordinates:** Copy TomTom `/way X Y` commands directly from each location.
- **Hunter pets:** A Hunter-only section with strong pets for the character's level, zones, coordinates, and mechanical notes.
- **Class quests:** Leveling milestones for stances, forms, demons, totems, poisons, and mounts.

### Secondary section: `/professions`

- **Profession selector:** Select up to five professions while enforcing the Classic primary and secondary profession limits.
- **Skill comparison:** Compare the ideal skill level, based on five points per character level, with the current skill.
- **Recipe progression:** Follow crafting and gathering paths from 1 to 300, including materials, sources, and practical notes.
- **Gathering spots:** Find farming locations appropriate for the character's level.
- **Economy guide:** Decide what to sell on the Auction House, disenchant, or save for advanced recipes.
- **Profession pair suggestions:** Find professions that share materials, such as Mining and Blacksmithing or Skinning and Leatherworking.

### Cross-cutting features

- **Wowhead tooltips** for items, quests, and NPCs.
- **Internationalization:** English (US) is the default language. Brazilian Portuguese remains available from the header and is persisted in the browser.
- **Persistent state:** Character and profession selections are stored in `localStorage`.
- **Security:** No token or secret is included in the frontend or repository.

## Stack

React 19 + Vite + TypeScript + Tailwind CSS + shadcn/ui, i18next for internationalization, `lucide-react` for icons, and `react-router-dom` for routing.

All packages are open source (MIT, ISC, or Apache-2.0); there are no paid dependencies.

## Project Structure

```text
.github/workflows/deploy-pages.yml  # GitHub Pages build and deployment
docker-compose.yml                   # Local development environment
index.html                           # Metadata, fonts, and Wowhead tooltip script
i18n.config.json                     # Language manifest (English default, Portuguese available)
public/locales/{en,pt-BR}.json      # Interface strings
src/
  components/                         # Shared UI and feature components
  config/                             # Blizzard API configuration
  context/                            # Character state and provider
  data/                               # Curated dungeons, quests, pets, classes, and professions
  hooks/                              # React hooks
  i18n/                               # i18next runtime and helpers
  lib/                                # Domain utilities
  pages/                              # Route-level pages
  services/                           # Isolated Blizzard API service
  types/                              # Domain types
```

## Local Development

### pnpm

```bash
pnpm install
pnpm dev        # http://localhost:8080
pnpm check      # eslint + tsc --noEmit
pnpm build:prod
pnpm preview
```

### Docker

```bash
docker compose up
# Development server at http://localhost:8080 with HMR
```

## Environment Variables

Only public values belong in the repository. Copy `.env.example` to `.env` if you want to override the defaults. The app works without an `.env` file because `src/config/blizzard.config.ts` provides safe Classic defaults.

| Variable | Default | Use |
| --- | --- | --- |
| `VITE_BLIZZARD_NAMESPACE` | `static-classic-us` | Blizzard namespace |
| `VITE_BLIZZARD_REGION` | `us` | Region, such as `us` or `eu` |
| `VITE_BLIZZARD_LOCALE` | `en_US` | Data locale |
| `VITE_BLIZZARD_API_BASE` | *(empty)* | URL for a server-side proxy that stores Blizzard credentials |
| `VITE_WOWHEAD_DOMAIN` | `classic` | Tooltip domain, such as `classic`, `tbc`, or `wotlk` |
| `GH_PAGES_BASE` | `/` | GitHub Pages project-site base path, set by the deployment workflow |

> Never put a Blizzard `client_secret` or another private key in frontend code. Frontend secrets are public. Use a server-side proxy and expose only its URL here.

### Blizzard service

`src/services/blizzardService.ts` is the only outbound API layer:

- Without `VITE_BLIZZARD_API_BASE`, calls return `null` immediately and the site uses curated data from `src/data/`.
- With the proxy configured, the service can fetch live realm, item, quest, and spell data with timeout and in-memory caching.
- Switching to WoW Forever namespaces only requires changing environment variables.

## Internationalization

- `i18n.config.json` is the single source of truth for supported languages. English (`en`) is the fallback and default language; Portuguese (`pt-BR`) is available as an explicit option.
- Interface strings live in `public/locales/{en,pt-BR}.json` and both files use the same key set.
- Game names remain in English for consistency with Wowhead links and tooltips; descriptive data uses localized values resolved by `src/lib/localize.ts`.

## GitHub Pages Deployment

1. Push the repository to GitHub on the `main` branch.
2. In **Settings > Pages**, select **GitHub Actions** as the source if GitHub has not selected it automatically.
3. The `.github/workflows/deploy-pages.yml` workflow installs dependencies, builds with `GH_PAGES_BASE=/<repository-name>/`, and publishes `dist/`.
4. `public/404.html` preserves deep links such as `/professions` when hosted on GitHub Pages.

## Data Accuracy

The data in `src/data/` is curated rather than fetched from an API. It covers Classic dungeons, major dungeon quests, Hunter pets, class milestones, and professions from 1 to 300.

- Entities accept a `wowheadId`. If an ID is unconfirmed, it is intentionally omitted so the link opens a Wowhead search instead of showing an incorrect tooltip.
- Adding a confirmed `wowheadId` enables the tooltip automatically.
- Coordinates use Wowhead's 0-100 scale and should be checked on the map before publishing a guide.
- Recipes and skill ranges follow classic leveling paths; private-server variations may require data adjustments.

Contributions are welcome through pull requests to files under `src/data/`.

## Verification

```bash
pnpm check
pnpm build:prod
pnpm dev
```
