# Contributing to WayfinderCodex

Thanks for helping improve WayfinderCodex.

## Before You Start

- Keep changes focused and explain the user-facing purpose.
- Do not add Blizzard credentials, API tokens, private keys, or other secrets.
- Do not add copyrighted images, text, or data unless you have permission to redistribute them.
- Keep the curated game data accurate and include a source or verification note when adding IDs, coordinates, or quest details.

## Development

```bash
pnpm install
pnpm check
pnpm build:prod
pnpm dev
```

The app uses English as the default language and supports Brazilian Portuguese. When changing interface text, update both files in `public/locales/` and keep their key sets synchronized.

## Pull Requests

1. Create a branch from `main`.
2. Make the smallest complete change.
3. Run `pnpm check` and `pnpm build:prod`.
4. Describe the change, validation performed, and any external assets or sources used.
5. Open a Pull Request against `main`.

Pull Requests may be reviewed for correctness, accessibility, licensing, security, and consistency with the project's fan-made disclaimer. Submitting a Pull Request does not transfer copyright in your contribution; by submitting it, you grant the project permission to review and include the contribution under the repository's MIT License, subject to the license terms.

## Scope and Disclaimer

WayfinderCodex is an independent fan project and is not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft, WoW Classic, and related names, artwork, and game content belong to their respective rights holders. Contributions must not imply endorsement or ownership of those third-party materials.
