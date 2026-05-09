import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { POST_QUERY } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import RichBody from '@/components/RichBody'
import imageUrlBuilder from '@sanity/image-url'
import { Post } from '@/types'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  if (!source) return '' // or return a placeholder URL
  return builder.image(source).width(1200).auto('format').url()
}


interface Params {
  slug: string
}

export async function generateMetadata({ params }: { params: Params })  {
  const { slug } = params

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

export default async function SermonPage({ params }: { params: Params }) { const { slug } = await params

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
        {post.categories?.length > 0 && (
          <div className="inline-flex items-center gap-2 bg-faith-gold/20 px-4 py-2 rounded-full mb-6 flex-wrap justify-center">
            {post.categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/categories/${(cat as any).slug?.current || cat._id}`}
                className="text-faith-gold font-semibold hover:underline"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        )}

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          {post.title}
        </h1>

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

      <RichBody content={post.body} />

      <div className="mt-24 pt-12 border-t border-gray-200">
        <Link
          href="/sermons"
          className="inline-flex items-center gap-2 text-faith-blue hover:text-faith-gold font-semibold"
        >
          ← Back to Sermons
        </Link>
      </div>
    </article>
  )
}

