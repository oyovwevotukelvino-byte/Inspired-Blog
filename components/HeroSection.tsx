'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative py-40 text-center overflow-hidden">
      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#2a4f7c] to-[#1E3A5F]" />

      {/* grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* gold glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A017]/10 blur-[120px] pointer-events-none" />

      {/* cross watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-white/[0.03] text-[32rem] font-bold leading-none">✝</span>
      </div>

      {/* content */}
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A017]/40 text-[#D4A017] text-sm font-semibold mb-6 tracking-wide">
            ✝ Faith · Hope · Gospel
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Welcome to{' '}
          <span className="text-[#D4A017]">David&apos;s</span> Blog
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Sharing the Gospel, daily devotionals, and powerful sermons to strengthen your faith.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button as={Link} href="/categories/sermons" size="lg">
            Latest Sermons →
          </Button>
          <Button as={Link} href="/categories/devotionals" size="lg" variant="surface">
            Devotionals
          </Button>
        </motion.div>
      </div>
    </section>
  )
}