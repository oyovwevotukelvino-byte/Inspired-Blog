"use client"

import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  if (!source || !source.asset) return ''
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
          <div className="relative w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={url}
              alt={value.alt || 'Blog image'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover"
              priority={false}
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
  },
  marks: {
  link: ({ value, children }: any) => (
    <a
      href={value.href}
      className="text-faith-blue hover:text-faith-gold underline font-semibold"
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
      <ul className="my-6 ml-8 list-disc space-y-2 [&>li]:mt-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="my-6 ml-8 list-decimal space-y-2 [&>li]:mt-2">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-5xl font-bold my-12 text-gray-800">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-4xl font-bold my-10 text-gray-800">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-3xl font-bold my-8 text-gray-800">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-2xl font-bold my-6 text-gray-800">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-xl font-bold my-4 text-gray-800">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-lg font-bold my-4 text-gray-800">{children}</h6>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-faith-gold pl-6 italic my-8 py-4 bg-gray-50 rounded-r-xl">
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
  return <PortableText value={content} components={components} />
}