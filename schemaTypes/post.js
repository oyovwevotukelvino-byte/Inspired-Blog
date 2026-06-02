import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({name: 'author', title: 'Author', type: 'reference', to: {type: 'author'}}),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'postType',
      title: 'Post Type',
      type: 'string',
      options: {
        list: [
          {title: 'Sermon', value: 'sermon'},
          {title: 'Devotional', value: 'devotional'},
          {title: 'Teaching', value: 'teaching'},
          {title: 'Testimony', value: 'testimony'},
          {title: 'Event', value: 'event'},
        ],
        layout: 'radio',
      },
      initialValue: 'sermon',
    }),
    defineField({name: 'publishedAt', title: 'Published at', type: 'datetime'}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3}),
    defineField({name: 'body', title: 'Body', type: 'blockContent'}),
    defineField({
      name: 'sermonNotes',
      title: 'Downloadable Sermon Notes',
      type: 'file',
      options: {accept: '.pdf,.doc,.docx'},
    }),
    defineField({
      name: 'sermonAudio',
      title: 'Sermon Audio',
      type: 'file',
      options: {accept: 'audio/*'},
    }),
    defineField({
      name: 'sermonVideo',
      title: 'Sermon Video URL (YouTube/Vimeo)',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      postType: 'postType',
    },
    prepare(selection) {
      const {author, postType} = selection
      return {
        ...selection,
        subtitle: `${postType ? postType.toUpperCase() : 'POST'} · by ${author || 'Unknown'}`,
      }
    },
  },
})