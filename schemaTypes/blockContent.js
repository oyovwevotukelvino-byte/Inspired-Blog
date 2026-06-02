
import {defineType, defineArrayMember, defineField} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [{title: 'URL', name: 'href', type: 'url'}],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alt text', type: 'string'}),
        defineField({name: 'caption', title: 'Caption', type: 'string'}),
      ],
    }),
    // Scripture block
    defineArrayMember({
      name: 'scripture',
      title: 'Scripture',
      type: 'object',
      fields: [
        defineField({name: 'verse', title: 'Verse text', type: 'text'}),
        defineField({name: 'reference', title: 'Reference (e.g. John 3:16)', type: 'string'}),
        defineField({
          name: 'translation',
          title: 'Translation',
          type: 'string',
          options: {
            list: ['NIV', 'KJV', 'ESV', 'NKJV', 'NLT', 'AMP'],
          },
          initialValue: 'NIV',
        }),
      ],
      preview: {
        select: {title: 'reference', subtitle: 'verse'},
      },
    }),
    // YouTube embed
    defineArrayMember({
      name: 'youtube',
      title: 'YouTube Video',
      type: 'object',
      fields: [
        defineField({name: 'url', title: 'YouTube URL', type: 'url'}),
        defineField({name: 'caption', title: 'Caption', type: 'string'}),
      ],
      preview: {
        select: {title: 'caption', subtitle: 'url'},
      },
    }),
    // Audio file
    defineArrayMember({
      name: 'audioFile',
      title: 'Audio Sermon',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'file', title: 'Audio File', type: 'file', options: {accept: 'audio/*'}}),
        defineField({name: 'duration', title: 'Duration (e.g. 45:00)', type: 'string'}),
      ],
      preview: {
        select: {title: 'title', subtitle: 'duration'},
      },
    }),
    // Pull quote
    defineArrayMember({
      name: 'pullQuote',
      title: 'Pull Quote',
      type: 'object',
      fields: [
        defineField({name: 'quote', title: 'Quote', type: 'text'}),
        defineField({name: 'attribution', title: 'Attribution', type: 'string'}),
      ],
      preview: {
        select: {title: 'quote'},
      },
    }),
  ],
})