import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import { Post } from '@/types'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source).width(400).auto('format').url()!
}

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const imageSrc = post.mainImage ? urlFor(post.mainImage.asset || post.mainImage) : '/placeholder.jpg'

  return (
    <Link 
     href={`/sermons/${post.slug.current}`} className="post-card group block h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {post.mainImage && (
        <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="space-y-3 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2">
          {post.categories?.map((cat) => (
            <span 
              key={cat._id} 
              className="px-3 py-1 bg-faith-gold/20 text-faith-gold rounded-full text-xs font-medium"
            >
              {cat.title}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-faith-blue transition line-clamp-2 flex-1">
          {post.title}
        </h3>
        <p className="text-gray-600 line-clamp-2 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t">
          <span>By {post.author?.name || 'Pastor David'}</span>
          <time>{date}</time>
        </div>
      </div>
    </Link>
  )
}

