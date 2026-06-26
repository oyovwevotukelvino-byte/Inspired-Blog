import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'



export default defineType({
  name: 'category',
 title: 'Ministries',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({
      name: 'description',
      title: 'About this Ministry',
      type: 'text',
    }),
  ],
})