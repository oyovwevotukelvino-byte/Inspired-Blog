import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'eventDate', title: 'Event Date', type: 'datetime'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'registrationUrl', title: 'Registration URL', type: 'url'}),
    defineField({name: 'body', title: 'Details', type: 'blockContent'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'eventDate', media: 'image'},
  },
})