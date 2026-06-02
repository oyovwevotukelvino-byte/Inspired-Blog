import Link from 'next/link'
import { client } from '@/lib/sanity'
import { POSTS_QUERY } from '@/lib/queries'
import PostCard from '@/components/PostCard'
import Button from '@/components/ui/Button'
import HeroSection from '@/components/HeroSection'
import AnimatedGrid from '@/components/AnimatedGrid'
import { motion } from 'framer-motion'



async function getPosts() {
  return await client.fetch(POSTS_QUERY)
}

export default async function Home() {
  const posts = await getPosts()
  console.log(posts)
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection />

          
          

      {/* Posts */}
     <section className="py-24 bg-gradient-to-br from-[#D4A017] via-[#D4A017] to-[#D4A017]/40">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 text-white">Recent Messages</h2>
       
          <AnimatedGrid>
          {posts.map((post: any) => (
         <PostCard key={post._id} post={post} />
         ))}
         </AnimatedGrid>

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