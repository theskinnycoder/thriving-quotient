import { Urbanist, Vollkorn } from "@next/font/google"

export const vollkorn = Vollkorn({
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-vollkorn",
  weight: ["400", "500", "600"],
})

export const urbanist = Urbanist({
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-urbanist",
})
