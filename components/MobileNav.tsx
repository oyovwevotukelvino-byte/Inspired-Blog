'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden relative">

      <button
        onClick={() => setOpen(!open)}
        className="text-white"
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div className="absolute right-0 top-14 w-64 rounded-xl bg-[#1E3A5F] shadow-2xl overflow-hidden border border-white/10">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block px-5 py-4 text-white hover:bg-white/10"
          >
            Home
          </Link>

          <Link
            href="/sermons"
            onClick={() => setOpen(false)}
            className="block px-5 py-4 text-white hover:bg-white/10"
          >
            Sermons
          </Link>

          <Link
            href="/categories"
            onClick={() => setOpen(false)}
            className="block px-5 py-4 text-white hover:bg-white/10"
          >
            Categories
          </Link>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="block px-5 py-4 text-white hover:bg-white/10"
          >
            Profile
          </Link>

          <Link
            href="/studio"
            onClick={() => setOpen(false)}
            className="block px-5 py-4 bg-[#D4A017] text-[#1E3A5F] font-semibold"
          >
            Dashboard
          </Link>

        </div>
      )}
    </div>
  )
}