import groq from 'groq'

export const POSTS_QUERY = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0...12] {
  _id,
  title,
  slug,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  categories[]->{
    _id,
    title,
    slug
  },
  author->{
    _id,
    name,
    slug
  },
  excerpt,
  postType
}`

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  categories[]->{
    _id,
    title,
    slug
  },
  author->{
    _id,
    name,
    slug
  },
  body,
  excerpt,
  postType,
  sermonNotes,
  sermonAudio {
    asset->{
      url
    }
  },
  sermonVideo
}`

export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug
}`