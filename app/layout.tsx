import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' David Uchechukwu - Faith Inspired Blog',
  description: 'Gospel messages, devotionals, and sermons from  David to inspire your faith journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-faith-blue">✝️  David</Link>
              <div className="space-x-6">
                <Link href="/" className="hover:bg-yellow-500  text-white-gold px-4 py-2 rounded-lg ">Home</Link>
                <Link href="/categories/sermons" className="hover:bg-yellow-500  text-white-gold px-4 py-2 rounded-lg">Sermons</Link>
                <Link href="/categories/devotionals" className="hover:bg-yellow-500 text-white-gold px-4 py-2 rounded-lg">Devotionals</Link>
               <Link href="/profile" className="hover:bg-yellow-500 text-white-gold px-4 py-2 rounded-lg">
                Profile
              </Link>

                <Link href="/studio" className="bg-faith-gold text-white-gold px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Dashboard</Link>
                
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-faith-blue text-white py-12 mt-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>"For God so loved the world..." John 3:16</p>
            <p className="mt-4">&copy; 2026  David Uchechukwu. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

