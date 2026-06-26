import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export default defineType({
  name: 'post',
  title: 'Sermons',
  type: 'document',
  icon: BookIcon,

  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'downloads',
      title: 'Downloads',
    },
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Sermon Title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: true,
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'content',
    }),

    defineField({
      name: 'author',
      title: 'Pastor',
      type: 'reference',
      to: [{type: 'author'}],
      validation: Rule => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'postType',
      title: 'Content Type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {
            title: '📖 Sermon',
            value: 'sermon',
          },
          {
            title: '❤️ Devotional',
            value: 'devotional',
          },
          {
            title: '🎓 Teaching',
            value: 'teaching',
          },
          {
            title: '🙌 Testimony',
            value: 'testimony',
          },
          {
            title: '📅 Event',
            value: 'event',
          },
        ],
      },
      initialValue: 'sermon',
      group: 'content',
    }),

    defineField({
      name: 'categories',
      title: 'Ministries',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
      group: 'content',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      group: 'content',
    }),

    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      group: 'content',
    }),

    defineField({
      name: 'body',
      title: 'Message',
      type: 'blockContent',
      group: 'content',
    }),

    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Image Description',
          type: 'string',
        }),
      ],
      group: 'media',
    }),

    defineField({
      name: 'sermonVideo',
      title: 'YouTube / Vimeo Link',
      type: 'url',
      description: 'Paste the full YouTube or Vimeo link.',
      group: 'media',
    }),

    defineField({
      name: 'sermonAudio',
      title: 'Audio Recording',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      group: 'downloads',
    }),

    defineField({
      name: 'sermonNotes',
      title: 'Sermon Notes (PDF)',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      group: 'downloads',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage',
      pastor: 'author.name',
      type: 'postType',
    },

    prepare({title, subtitle, media, pastor, type}) {
      return {
        title,
        subtitle: `${type ? type.toUpperCase() : 'SERMON'} • ${pastor || 'Pastor'} • ${
          subtitle
            ? new Date(subtitle).toLocaleDateString()
            : 'Draft'
        }`,
        media,
      }
    },
  },
})