export interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: { asset: { _ref: string }, crop?: any, hotspot?: any }
  publishedAt: string
  categories: Category[]
  author: Author
  body: any[]
  excerpt?: string
}

export interface Author {
  _id: string
  name: string
  slug: { current: string }
  image?: any
  bio?: any[]
}

export interface Category {
  _id: string
  title: string
}

