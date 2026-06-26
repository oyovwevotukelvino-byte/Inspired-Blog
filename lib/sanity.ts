import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'srqlmdq0',
  dataset: 'production',
  apiVersion: '2024-09-20',
  useCdn: true,
})