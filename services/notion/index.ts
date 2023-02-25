import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import type { BlogPost, BlogPostMeta } from "~/@types"
import {
  NOTION_ACCESS_TOKEN,
  NOTION_BLOG_DATABASE_ID,
} from "~/utils/constants"

export default class NotionService {
  private readonly client: Client
  private readonly n2m: NotionToMarkdown

  constructor() {
    this.client = new Client({
      auth: NOTION_ACCESS_TOKEN,
    })
    this.n2m = new NotionToMarkdown({ notionClient: this.client })
  }

  /**
   * Get all published blog posts, sorted by updated date
   * @returns {Promise<BlogPostMeta[]>} Array of blog posts
   */
  async getPublishedBlogPosts(): Promise<BlogPostMeta[]> {
    const response = await this.client.databases.query({
      database_id: NOTION_BLOG_DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Updated",
          direction: "descending",
        },
      ],
    })

    return response.results.map(res => {
      return NotionService.pageToPostTransformer(res)
    })
  }

  /**
   * Get a blog post by its slug
   * @param {string} slug - The slug of the blog post
   * @returns {Promise<BlogPost>} The blog post
   */
  async getSingleBlogPost(slug: string): Promise<BlogPost> {
    const response = await this.client.databases.query({
      database_id: NOTION_BLOG_DATABASE_ID,
      filter: {
        and: [
          {
            property: "Slug",
            formula: {
              string: {
                equals: slug,
              },
            },
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Updated",
          direction: "descending",
        },
      ],
    })

    if (!response.results[0]) {
      throw new Error("No results available")
    }

    const page = response.results[0]

    const mdBlocks = await this.n2m.pageToMarkdown(page.id)
    const content = this.n2m.toMarkdownString(mdBlocks)
    const post = NotionService.pageToPostTransformer(page)

    return {
      post,
      content,
    }
  }

  private static pageToPostTransformer(page: any): BlogPostMeta {
    let coverImg
    switch (page?.cover?.type) {
      case "file":
        coverImg = page.cover.file.url
        break
      case "external":
        coverImg = page.cover.external.url
        break
      default:
        coverImg = ""
    }

    return {
      id: page.id,
      coverImg,
      title: page.properties.Name.title[0].plain_text,
      tags: page.properties.Tags.multi_select,
      excerpt: page.properties.Excerpt.rich_text[0].plain_text,
      createdAt: page.properties.CreatedAt.last_edited_time,
      updatedAt: page.properties.UpdatedAt.last_edited_time,
      slug: page.properties.Slug.formula.string,
    }
  }
}
