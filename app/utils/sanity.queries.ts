import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`{
  "items": *[_type == "post" && defined(slug.current) && language == $language] | order(_createdAt desc) [$offset...$end],
  "total": count(*[_type == "post" && defined(slug.current) && language == $language])
}`

export async function getPosts(
  client: SanityClient,
  language = 'en',
  {
    offset = 0,
    limit = 10,
  }: {
    offset?: number
    limit?: number
  } = {},
): Promise<{ items: Post[]; total: number }> {
  const end = offset + limit

  return await client.fetch(postsQuery, { language, offset, end })
}

export const postsCountQuery = groq`count(*[_type == "post" && defined(slug.current) && language == $language])`

export async function getPostsCount(
  client: SanityClient,
  language = 'en',
): Promise<number> {
  return await client.fetch(postsCountQuery, { language })
}

export const relatedPostsQuery = groq`*[_type == "post" && defined(slug.current) && language == $language && slug.current != $slug] | order(_createdAt desc) [0...3]`

export async function getRelatedPosts(
  client: SanityClient,
  slug: string,
  language = 'en',
): Promise<Post[]> {
  return await client.fetch(relatedPostsQuery, { slug, language })
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug && language == $language][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
  language = 'en',
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
    language,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][] {
  "slug": slug.current,
  "language": language
}
`

export const postSlugsByLanguageQuery = groq`
*[_type == "post" && defined(slug.current) && language == $language][] {
  "slug": slug.current
}
`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  readTime: number
  slug: Slug
  keywords?: string
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}
