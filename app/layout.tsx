"use client"

import { usePathname } from "next/navigation"
import { type FC, type ReactNode } from "react"
import { HiOutlineArrowUp as ArrowUpIcon } from "react-icons/hi2"
import "~/styles/globals.css"
import { urbanist, vollkorn } from "./fonts"

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body>
        <main
          className={`relative ${vollkorn.variable} ${urbanist.variable}`}
        >
          {children}
          {pathname === "/" && (
            <a
              href="#hero"
              className="bottom-48 left-10 absolute"
            >
              <ArrowUpIcon className="animate-bounce w-10 h-10 text-black" />
            </a>
          )}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
