# Pastor David Uchechukwu Faith Blog

Clean, scalable Next.js blog powered by Sanity CMS. Pastor David publishes gospel messages, devotionals & sermons via intuitive no-code dashboard.

## 🚀 Quick Start

### 1. Start Development Servers
```bash
# Blog site (localhost:3000)
npm run dev

# CMS Dashboard (localhost:3333/studio) - in new terminal
npm run studio
```

### 2. Pastor Dashboard (No Code Required)
- Go to [localhost:3333/studio](http://localhost:3333/studio)
- Login with Sanity account
- Create:
  - **Author**: 'Pastor David Uchechukwu' + photo/bio
  - **Categories**: 'Sermons', 'Devotionals', 'Gospel Messages'
  - **Posts**: Sermons w/ rich text, images, publish date
- Content auto-appears on blog!

### Features
- ✅ Faith-inspired design (gold/blue, cross accents, serene)
- ✅ Mobile-responsive, SEO-ready
- ✅ Home: Featured posts grid
- ✅ Single post: Rich content renderer (headings, quotes, images)
- ✅ Categories: Filter by Sermons/Devotionals
- ✅ Studio at `/studio`
- ✅ Scalable (App Router, Server Components)

### Pages
- `/` Home
- `/[slug]` Post
- `/categories/[slug]` Category
- `/studio` CMS

## 📤 Deploy
1. **Vercel** (recommended):
   - Connect repo to vercel.com
   - Add Sanity env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID=srqlmdq0`, `NEXT_PUBLIC_SANITY_DATASET=production`
2. **Sanity Studio**: `npm run build && npm run deploy`
3. Live!

## Scripts
- `npm run dev` Blog
- `npm run studio` CMS
- `npm run build` Production
- `npm run lint` Check

Blog ready for Pastor David to inspire thousands!

✝️

