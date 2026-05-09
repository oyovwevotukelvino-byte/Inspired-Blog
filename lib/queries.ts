import groq from 'groq'

export const POSTS_QUERY = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0...12] {
  _id,
  title,
  slug,
  "mainImage": mainImage {
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
  "excerpt": pt::text(body[0].children[0])
}`

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  "mainImage": mainImage {
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
}`

export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id,
  title
}`