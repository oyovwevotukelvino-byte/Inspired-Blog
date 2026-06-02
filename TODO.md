# Production Upgrade TODO

## Phase 1 — Foundation Cleanup
- [ ] Create clean folder architecture (components/ui, features, hooks, styles, animations)
- [x] TypeScript: create `types/` folder and move existing `types.ts` into:

  - [ ] `types/post.ts`
  - [ ] `types/author.ts`
  - [ ] `types/category.ts`
  - [ ] `types/index.ts` barrel
- [ ] Add reusable UI system
  - [ ] `components/ui/Button.tsx` with variants (primary/accent/surface/muted)
- [ ] Minimal replacements in sermon pages to prove end-to-end
  - [ ] Update imports from moved types
  - [ ] Replace hardcoded CTA patterns with `Button` where safe

## Phase 2 — Visual Upgrade
- [ ] Hero section upgrade (glow/gradient/grain/scripture text)
- [ ] Typography upgrade (Syne + Inter)
- [ ] Motion system (presets + stagger + transitions)
- [ ] Glassmorphism UI (frosted cards)

## Phase 3 — CMS Expansion (MOST IMPORTANT)
- [ ] Sanity schema expansion (author/category/sermon/devotional/events/testimonies/quotes)
- [ ] Portable Text rich blocks (scripture/quote/gallery/youtube/audio)
- [ ] Draft preview + scheduled publishing + slug generation
- [ ] Image optimization pipeline

## Phase 4 — Sermon Platform
- [ ] Dynamic sermon routes + video/audio + transcripts + downloadable notes
- [ ] Sermon UX (progress/share/related/search)

## Phase 5 — SEO & Performance
- [ ] generateMetadata + OpenGraph + Twitter + canonical + sitemap/robots
- [ ] Replace remaining <img> with next/image + lazy loading
- [ ] Loading skeletons + route prefetching

## Phase 6 — User Experience
- [ ] loading.tsx + skeleton shimmer + empty/error states

## Phase 7 — Advanced Features
- [ ] Full-site search + filters
- [ ] Newsletter signup (Resend/Mailchimp/ConvertKit)
- [ ] Social sharing + copy link
- [ ] Analytics + view count + engagement tracking

## Phase 8 — Premium Polish
- [ ] Animated navbar + active route indicator + mobile menu animation
- [ ] Micro interactions (magnetic, glow hover, underline)
- [ ] Audio experience (mini player + persistent player)


