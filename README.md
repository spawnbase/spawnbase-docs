# Spawnbase Documentation

Public documentation site built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/), deployed to Cloudflare Workers.

## Development

```bash
pnpm install
pnpm dev  # http://localhost:4322
```

## Deployment

- **Preview**: `pnpm deploy:preview` → `docs-preview.spawnbase.ai`
- **Production**: `pnpm deploy:prod` → `docs.spawnbase.ai`

Deploys automatically to preview on push to `main` via GitHub Actions.

## Integration with Main Repo

This repo is included as a git submodule in the [main Spawnbase monorepo](https://github.com/spawnbase/spawnbase) at `/apps/docs/`.
