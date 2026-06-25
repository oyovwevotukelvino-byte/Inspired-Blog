import type { Category, Author } from '.'

export interface Post {
  _id: string
  title: string
  slug: { current: string }

  mainImage?: {
    asset: { _ref: string }
    crop?: any
    hotspot?: any
  }

  publishedAt: string
  categories: Category[]
  author: Author
  body: any[]
  excerpt?: string

  sermonVideo?: string

  sermonAudio?: {
    asset?: {
      url?: string
    }
  }
}