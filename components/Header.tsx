"use client"

import Image from "next/image"
import Link from "next/link"
import { type FC } from "react"
import { HiBars2 as HamBurgerIcon } from "react-icons/hi2"
import useSideBar from "~/hooks/use-side-bar"
import logo from "~/public/logo.webp"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { toggleSideBar } = useSideBar()

  return (
    <header
      id="header"
      className="absolute inset-x-0 top-0 flex items-center justify-between px-12 py-6"
    >
      <Link href="/">
        <Image
          src={logo}
          alt="Thriving Quotient Logo"
          className="aspect-w-16 max-w-[12rem]"
        />
      </Link>
      <button onClick={toggleSideBar}>
        <HamBurgerIcon className="w-8 h-8 text-black" />
      </button>
    </header>
  )
}

export default Header
