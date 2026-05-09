import Link from 'next/link'
import { client } from '@/lib/sanity'
import { POSTS_QUERY } from '@/lib/queries'
import PostCard from '@/components/PostCard'

async function getPosts() {
  return await client.fetch(POSTS_QUERY)
}

export default async function Home() {
  const posts = await getPosts()
  console.log(posts)
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-32 text-center faith-cross bg-center bg-no-repeat">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-faith-gold"> David&apos;</span> Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sharing the Gospel, daily devotionals, and powerful sermons to strengthen your faith.
          </p>
          <Link href="/categories/sermons" className="bg-faith-gold text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg">
            Latest Sermons →
          </Link>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Recent Messages</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <div key={post._id}>
                <PostCard post={post} />
              </div>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-2xl text-gray-500">
                No posts yet. Visit{' '}
                <Link href="/studio" className="text-faith-gold hover:underline font-semibold">
                  Dashboard
                </Link>{' '}
                to add your first sermon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}