import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    defineField({name: 'text', title: 'Quote Text', type: 'text'}),
    defineField({name: 'attribution', title: 'Attribution', type: 'string'}),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Book, sermon, or scripture reference',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Faith', value: 'faith'},
          {title: 'Prayer', value: 'prayer'},
          {title: 'Scripture', value: 'scripture'},
          {title: 'Encouragement', value: 'encouragement'},
          {title: 'Wisdom', value: 'wisdom'},
        ],
      },
    }),
    defineField({name: 'featured', title: 'Featured', type: 'boolean', initialValue: false}),
  ],
  preview: {
    select: {title: 'text', subtitle: 'attribution'},
  },
})