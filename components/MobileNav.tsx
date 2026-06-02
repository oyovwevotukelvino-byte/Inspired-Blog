'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white p-2 rounded-lg hover:bg-white/20 transition"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#D4A017] shadow-lg py-4 px-4 flex flex-col gap-2">
          <Link href="/" onClick={() => setOpen(false)} className="text-white hover:bg-white/20 px-4 py-3 rounded-lg transition">Home</Link>
          <Link href="/sermons" onClick={() => setOpen(false)} className="text-white hover:bg-white/20 px-4 py-3 rounded-lg transition">Sermons</Link>
          <Link href="/categories/devotionals" onClick={() => setOpen(false)} className="text-white hover:bg-white/20 px-4 py-3 rounded-lg transition">Devotionals</Link>
          <Link href="/profile" onClick={() => setOpen(false)} className="text-white hover:bg-white/20 px-4 py-3 rounded-lg transition">Profile</Link>
          <Link href="/studio" onClick={() => setOpen(false)} className="bg-[#1E3A5F] text-white px-4 py-3 rounded-lg hover:bg-[#0f2040] transition">Dashboard</Link>
        </div>
      )}
    </div>
  )
}