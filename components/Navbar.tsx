'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'
import Button from './ui/Button'

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Sermons',
    href: '/sermons',
  },
  {
    name: 'Categories',
    href: '/categories',
  },
  {
    name: 'Profile',
    href: '/profile',
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#1E3A5F]/90 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1E3A5F] text-xl font-bold">
            ✝
          </div>

          <div>
            <h1 className="text-white font-bold text-lg leading-none">
              David Uchechukwu
            </h1>

            <p className="text-xs text-white/60">
              Ministry
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">

          {links.map((link) => {
            const active =
              pathname === link.href ||
              pathname.startsWith(link.href + '/')

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition font-medium ${
                  active
                    ? 'text-[#D4A017]'
                    : 'text-white/80 hover:text-[#D4A017]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}

          <Link href="/studio">
            <Button size="sm">
              Dashboard
            </Button>
          </Link>

        </nav>

        {/* Mobile */}
        <MobileNav />
      </div>
    </header>
  )
}