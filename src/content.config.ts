import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import directus from './lib/directus'
import { readItems } from '@directus/sdk'

const locations = defineCollection({
  loader: async () => {
    const collection = await directus.request(readItems('locations'))
    return collection.map((item) => {
      return {
        ...item,
        id: String(item.id),
      }
    })
  },
  schema: z.object({
    id: z.string(),
    status: z.string(),
    sort: z.optional(z.number()),
    content: z.string(),
    background: z.uuid(),
    logo: z.uuid(),
    name: z.string(),
    slug: z.string(),
    overview: z.string(),
    full_name: z.string(),
    street_address: z.string().nullable().optional(),
    address_locality: z.string().nullable().optional(),
    address_region: z.string().nullable().optional(),
    postal_code: z.string().nullable().optional(),
    address_country: z.string().nullable().optional(),
  }),
})

const ministries = defineCollection({
  loader: async () => {
    const collection = await directus.request(readItems('ministries'))
    return collection.map((item) => {
      return {
        ...item,
        id: String(item.id),
      }
    })
  },
  schema: z.object({
    id: z.uuid(),
    status: z.string(),
    sort: z.optional(z.number()),
    content: z.string(),
    background: z.uuid(),
    preview: z.uuid().nullable(),
    name: z.string(),
    slug: z.string(),
    overview: z.string(),
  }),
})

const contacts = defineCollection({
  loader: async () => {
    const collection = await directus.request(readItems('contacts'))
    return collection.map((item) => {
      return {
        ...item,
        id: String(item.id),
      }
    })
  },
  schema: z.object({
    id: z.string(),
    status: z.string(),
    sort: z.optional(z.number()),
    name: z.string(),
    details: z.string(),
  }),
})

const pages = defineCollection({
  loader: async () => {
    const collection = await directus.request(readItems('pages'))
    return collection.map((item) => {
      return {
        ...item,
        id: String(item.id),
      }
    })
  },
  schema: z.object({
    id: z.uuid(),
    status: z.string(),
    title: z.string(),
    slug: z.string(),
    details: z.string(),
  }),
})

const global_socialbuttons = defineCollection({
  loader: async () => {
    const collection = await directus.request(readItems('global_socialbuttons'))
    return collection.map((item) => {
      return {
        ...item,
        id: String(item.id),
      }
    })
  },
  schema: z.object({
    id: z.uuid(),
    status: z.string(),
    sort: z.optional(z.number()),
    name: z.string(),
    class: z.string(),
    link: z.string(),
  }),
})

export const collections = { locations, ministries, contacts, pages, global_socialbuttons }
