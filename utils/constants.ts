export const NODE_ENV = process.env.NODE_ENV
export const IS_DEV = NODE_ENV === "development"
export const BASE_URL = IS_DEV
  ? "http://127.0.0.1:3000"
  : "https://thrivingquotient.com"

// Notion Secrets
export const NOTION_ACCESS_TOKEN =
  process.env.NOTION_ACCESS_TOKEN ?? ""
export const NOTION_BLOG_DATABASE_ID =
  process.env.NOTION_BLOG_DATABASE_ID ?? ""

// Stripe Secrets
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? ""
export const STRIPE_WEBHOOK_SECRET =
  process.env.STRIPE_WEBHOOK_SECRET ?? ""
export const STRIPE_ACCOUNT_ID =
  process.env[
    IS_DEV ? "DEV_STRIPE_ACCOUNT_ID" : "STRIPE_ACCOUNT_ID"
  ] ?? ""
