import type { Metadata } from 'next'
import MobileNav from '@/components/MobileNav'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'David Uchechukwu - Faith Inspired Blog',
  description: 'Gospel messages, devotionals, and sermons from David to inspire your faith journey.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Syne:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav className="bg-[#D4A017] sticky top-0 z-50 shadow-lg relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                ✝️ David
              </Link>
              {/* desktop */}
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/" className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition">Home</Link>
                <Link href="/sermons" className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition">Sermons</Link>
                <Link href="/categories/devotionals" className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition">Devotionals</Link>
                <Link href="/profile" className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition">Profile</Link>
                <Link href="/studio" className="bg-[#1E3A5F] text-white px-4 py-2 rounded-lg hover:bg-[#0f2040] transition">Dashboard</Link>
              </div>
              {/* mobile */}
              <MobileNav />
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-[#1E3A5F] text-white py-12" >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>"For God so loved the world..." John 3:16</p>
            <p className="mt-4">&copy; 2026 David Uchechukwu. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}