export type Tag = {
  color: string
  id: string
  name: string
}

export type BlogPostMeta = {
  id: string
  slug: string
  coverImg: string
  title: string
  tags: Tag[]
  excerpt: string
  createdAt: string
  updatedAt: string
}

export type BlogPost = {
  post: BlogPostMeta
  content: string
}
