import Link from 'next/link'
import { client } from '@/lib/sanity'
import groq from 'groq'
import PostCard from '@/components/PostCard'
import type { Post } from '@/types'
import AnimatedGrid from '@/components/AnimatedGrid'

const SERMONS_QUERY = groq`*[_type == "post" && publishedAt < now() && references(*[_type == "category" && slug.current == "sermons"]._id)] | order(publishedAt desc) [0...12] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  categories[]->,
  author->,
  "excerpt": pt::text(body[0].children[0])
}`

async function getSermons(): Promise<Post[]> {
  return await client.fetch(SERMONS_QUERY)
}

export default async function SermonsPage() {
  const sermons = await getSermons()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-32 text-center bg-center bg-no-repeat">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
            Powerful <span className="text-faith-gold">Sermons</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformative Gospel messages from Pastor David Uchechukwu to strengthen your faith and walk with Christ.
          </p>

          <Link
            href="/studio"
            className="bg-faith-gold text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
          >
            Preach a New Sermon →
          </Link>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Latest Sermons</h2>

          {sermons.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-2xl text-gray-500 mb-8">
                No sermons yet. Be the first to share God word!
              </p>
              <Link
                href="/studio"
                className="bg-faith-blue text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Create Your First Sermon
              </Link>
            </div>
          ) : (
         <AnimatedGrid>
             {sermons.map((sermon) => (
             <PostCard key={sermon._id} post={sermon} />
             ))}
         </AnimatedGrid>
          )}

          {sermons.length > 0 && (
            <div className="text-center mt-16">
              <Link
                href="/categories/sermons"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                
                View All Sermons →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

