import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimony',
  title: 'Testimony',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({name: 'author', title: 'Author Name', type: 'string'}),
    defineField({
      name: 'authorImage',
      title: 'Author Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'excerpt', title: 'Short Excerpt', type: 'text', rows: 3}),
    defineField({name: 'body', title: 'Full Testimony', type: 'blockContent'}),
    defineField({name: 'publishedAt', title: 'Published At', type: 'datetime'}),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Healing', value: 'healing'},
          {title: 'Salvation', value: 'salvation'},
          {title: 'Provision', value: 'provision'},
          {title: 'Deliverance', value: 'deliverance'},
          {title: 'Restoration', value: 'restoration'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'author', media: 'authorImage'},
  },
})