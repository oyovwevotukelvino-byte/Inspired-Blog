import Link from 'next/link'
import { client } from '@/lib/sanity'
import { POSTS_QUERY } from '@/lib/queries'
import PostCard from '@/components/PostCard'
import { Post } from '@/types'

interface Props {
  params: { slug: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function CategoriesPage({ params, searchParams }: Props) {
  const categorySlug = params.slug?.[0]
  const query = categorySlug 
    ? groq`*[_type == "post" && references(*[_type == "category" && slug.current == "${categorySlug}"]._id)][0...20] | order(publishedAt desc)`
    : POSTS_QUERY

  const posts: Post[] = await client.fetch(query)

  const title = categorySlug ? `Category: ${categorySlug.replace('-', ' ')}` : 'All Categories'

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-faith-blue hover:text-faith-gold mb-6">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-800">{title}</h1>
        </div>
        
        {posts.length === 0 ? (
          <p className="text-center text-xl text-gray-500 py-24">
            No posts in this category yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

