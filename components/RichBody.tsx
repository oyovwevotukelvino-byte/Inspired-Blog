'use client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder(client)

function urlFor(source: any) {
  if (!source?.asset) return ''
  return builder.image(source).width(1200).auto('format').url() ?? ''
}

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null
      const url = urlFor(value)
      if (!url) return null
      return (
        <figure className="my-12 mx-auto max-w-4xl">
          <div className="relative w-full h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={url}
              alt={value.alt || 'Blog image'}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-gray-500 mt-4 italic text-sm">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },

    scripture: ({ value }: any) => (
      <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-[#1E3A5F] px-6 py-4 flex items-center justify-between">
          <span className="text-[#D4A017] font-bold text-lg">✝ {value.reference}</span>
          {value.translation && (
            <span className="text-white/60 text-sm font-medium">{value.translation}</span>
          )}
        </div>
        <div className="bg-[#1E3A5F]/5 border border-[#1E3A5F]/20 px-6 py-6">
          <p className="text-gray-700 text-lg leading-relaxed italic">"{value.verse}"</p>
        </div>
      </div>
    ),

    youtube: ({ value }: any) => {
      if (!value?.url) return null
      const videoId = value.url.match(
        /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
      )?.[1]
      if (!videoId) return null
      return (
        <figure className="my-12">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={value.caption || 'YouTube video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-gray-500 mt-4 italic text-sm">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },

    audioFile: ({ value }: any) => {
      if (!value?.file?.asset?._ref) return null
      return (
        <div className="my-10 bg-[#1E3A5F] rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-lg">{value.title || 'Sermon Audio'}</p>
              {value.duration && (
                <p className="text-white/60 text-sm mt-1">Duration: {value.duration}</p>
              )}
            </div>
            <span className="text-[#D4A017] text-3xl">🎵</span>
          </div>
          <audio
            controls
            className="w-full mt-2"
            style={{filter: 'invert(1) hue-rotate(180deg)'}}
          >
            <source src={`https://cdn.sanity.io/files/srqlmdq0/production/${value.file.asset._ref.replace('file-', '').replace(/-(\w+)$/, '.$1')}`} />
            Your browser does not support audio.
          </audio>
        </div>
      )
    },

    pullQuote: ({ value }: any) => (
      <div className="my-12 relative">
        <div className="absolute -left-2 top-0 text-[#D4A017] text-8xl leading-none opacity-30 font-serif select-none">
          "
        </div>
        <blockquote className="bg-gradient-to-br from-[#1E3A5F] to-[#2a4f7c] rounded-2xl px-10 py-8 shadow-xl">
          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic">
            {value.quote}
          </p>
          {value.attribution && (
            <footer className="mt-4 text-[#D4A017] font-semibold">
              — {value.attribution}
            </footer>
          )}
        </blockquote>
      </div>
    ),
  },

  marks: {
    link: ({ value, children }: any) => (
      <a
      
        href={value.href}
        className="text-[#1E3A5F] hover:text-[#D4A017] underline font-semibold transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="my-6 ml-8 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="my-6 ml-8 list-decimal space-y-2">{children}</ol>
    ),
  },

  block: {
    h1: ({ children }: any) => <h1 className="text-5xl font-bold my-12 text-gray-800">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-4xl font-bold my-10 text-gray-800">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-3xl font-bold my-8 text-gray-800">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-2xl font-bold my-6 text-gray-800">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#D4A017] pl-6 italic my-8 py-4 bg-gray-50 rounded-r-xl text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg leading-relaxed text-gray-700 my-4">{children}</p>
    ),
  },
}

interface Props {
  content: any[]
}

export default function RichBody({ content }: Props) {
  if (!content) return null
  return (
    <div className="prose-container max-w-3xl mx-auto">
      <PortableText value={content} components={components} />
    </div>
  )
}