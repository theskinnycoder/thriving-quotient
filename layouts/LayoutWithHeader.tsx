"use client"

import { type FC, type ReactNode } from "react"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import SideBar from "~/components/SideBar"

interface LayoutWithHeaderProps {
  children: ReactNode
}

const LayoutWithHeader: FC<LayoutWithHeaderProps> = ({
  children,
}) => {
  return (
    <div className="relative">
      <Header />
      <SideBar />
      <div className="flex flex-col">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default LayoutWithHeader
