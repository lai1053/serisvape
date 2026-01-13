## Vendure project notes (vaapee)

- Use `ecosystem.config.js` in repo root as the source of truth for PM2. Start/restart from `/home/ubuntu/my-shop` to ensure correct cwd/env.
- Frontend (storefront) and backend (server) builds are separate. Dashboard requires `apps/server` build: `npm run build:dashboard`.
- DB runs in Docker on host port 5432; backend reads `DB_*` from `apps/server/.env` or PM2 env. Wrong port or password causes restart loops.
- `APP_ENV=dev` breaks reverse-proxy rate-limit due to `trust proxy` false. Use `APP_ENV=production`.
- Asset URLs come from Vendure API/search index. If only one image is wrong, it is likely stale Next.js cache, not DB. Clear `.next/cache`, rebuild storefront, and revalidate tags.
- R2/S3 asset storage uses `configureS3AssetStorage` in `apps/server/src/vendure-config.ts`. Requires `R2_*` and `ASSET_URL_PREFIX` in server env.
- Storefront cache: `FeaturedProducts` should use `cacheTag('featured-products')` to allow revalidation via `/api/revalidate`.
- Deployments: only sync modified files to the remote; avoid full-directory rsync.
