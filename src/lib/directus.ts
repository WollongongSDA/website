import { createDirectus, rest } from '@directus/sdk'

type Location = {
  id: number
  status: string
  sort: number
  content: string
  background: string
  logo: string
  name: string
  slug: string
  overview: string
  full_name: string
  street_address?: string | null
  address_locality?: string | null
  address_region?: string | null
  postal_code?: string | null
  address_country?: string | null
}

type Ministry = {
  id: string
  status: string
  sort: number
  content: string
  background: string
  preview: string
  name: string
  slug: string
  overview: string
}

type Contact = {
  id: string
  status: string
  sort: number
  name: string
  details: string
}

type Page = {
  id: string
  status: string
  title: string
  details: string
}

type Global_SocialButtons = {
  id: string
  status: string
  sort: number
  name: string
  class: string
  link: string
}

type Schema = {
  locations: Location[],
  ministries: Ministry[],
  contacts: Contact[],
  pages: Page[],
  global_socialbuttons: Global_SocialButtons[],
}

const directus = createDirectus<Schema>(import.meta.env['CMS_BASE']).with(rest())

export default directus
