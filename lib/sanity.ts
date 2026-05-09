import { createClient } from '@sanity/client'
import groq from 'groq'

export const client = createClient({
  projectId: 'srqlmdq0',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-09-20', // or today's date for latest
})

