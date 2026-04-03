# Calio Web

`apps/web` is the public Calio site.

## Scope

- `/`: landing page
- `/sign-in`: Stack Auth entry
- `/handler/[...stack]`: Stack Auth handler

## Commands

```bash
pnpm --filter @calio/web dev
pnpm --filter @calio/web lint
pnpm --filter @calio/web check-types
```
