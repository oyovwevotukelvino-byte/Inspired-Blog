import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { POST_QUERY } from '@/lib/queries'
import type { Post } from '@/types'

import Image from 'next/image'
import Link from 'next/link'
import RichBody from '@/components/RichBody'
import { createImageUrlBuilder } from '@sanity/image-url'
const builder = createImageUrlBuilder(client)
function urlFor(source: any) {
  if (!source?.asset) return ''
  return builder.image(source).width(1200).auto('format').url()
}

interface Params {
  slug: string
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params

  if (!slug) return { title: 'Post Not Found' }

  const post: Post | null = await client.fetch(POST_QUERY, {
    slug,
  })

  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params

  if (!slug) return notFound()

  const post: Post | null = await client.fetch(POST_QUERY, {
    slug,
  })

  if (!post) return notFound()

  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="max-w-4xl mx-auto px-4 py-24">
      {/* Hero Image */}
      {post.mainImage && (
        <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <Image
            src={urlFor(post.mainImage)}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <header className="text-center mb-16">
        {/* Categories */}
        {post.categories?.length > 0 && (
          <div className="inline-flex items-center gap-2 bg-faith-gold/20 px-4 py-2 rounded-full mb-6 flex-wrap justify-center">
            {post.categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/categories/${cat.slug?.current || cat._id}`}
                className="text-faith-gold font-semibold hover:underline"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author + Date */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-gray-500 mb-8">
          {post.author && (
            <span>
              By{' '}
              <Link
                href={`/author/${post.author.slug?.current}`}
                className="font-semibold hover:text-faith-blue"
              >
                {post.author.name}
              </Link>
            </span>
          )}
          <span>•</span>
          <time>{date}</time>
        </div>
      </header>

      {/* Content */}
      <RichBody content={post.body} />
      

{/* Sermon Video */}
{post.sermonVideo && (
  <div className="mt-12">
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${post.sermonVideo.match(/[?&]v=([^&]+)/)?.[1]}`}
        title="Sermon Video"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  </div>
)}

{/* Sermon Audio */}
{post.sermonAudio?.asset && (
  <div className="mt-8 bg-[#1E3A5F] rounded-2xl p-6">
    <p className="text-white font-bold mb-4">🎵 Listen to this Sermon</p>
    <audio controls className="w-full">
      <source src={post.sermonAudio.asset.url} />
    </audio>
  </div>
)}

      {/* Back Button */}
      <div className="mt-24 pt-12 border-t border-gray-200">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-faith-blue hover:text-faith-gold font-semibold"
        >
          ← Back to Messages
        </Link>
      </div>
    </article>
  )
}