"use client"

import Link from "next/link"
import { useEffect, useRef, type FC } from "react"
import { HiXMark as CloseIcon } from "react-icons/hi2"
import useSideBar from "~/hooks/use-side-bar"

interface SideBarProps {}

const navItems = [
  {
    name: "Programs",
    href: "/programs",
  },
  {
    name: "Let's Talk",
    href: "/lets-talk",
  },
  {
    name: "Consultations",
    href: "/consultations",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About Us",
    href: "/about",
  },
]

const SideBar: FC<SideBarProps> = () => {
  const { toggleSideBar, sideBarOpen } = useSideBar()
  const sideBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = (_e: Event) => {
      const scrollY = window.scrollY
      const sideBarHeight = sideBarRef.current?.clientHeight!

      if (scrollY < sideBarHeight && sideBarOpen) {
        toggleSideBar()
      }
    }

    document?.addEventListener("scroll", handleScroll)

    return () => {
      document?.removeEventListener("scroll", handleScroll)
    }
  }, [sideBarOpen, toggleSideBar])

  return (
    <aside
      ref={sideBarRef}
      className={`font-urbanist z-50 w-1/3 h-screen fixed right-0 top-0 bg-[#FFF8EF] rounded-3xl transition transform duration-300 ease-in-out rounded-tr-none ${
        sideBarOpen ? "" : "translate-x-[120%]"
      }`}
    >
      <div className="relative flex items-center justify-center w-full p-0">
        <div className="w-full from-[#c2b9ff] to-[#ffb696] bg-gradient-to-b absolute rounded-3xl h-full blur-md m-0"></div>
        <button
          className="top-10 right-10 absolute z-30"
          onClick={toggleSideBar}
        >
          <CloseIcon className="w-5 h-5 text-black stroke-1" />
        </button>
        <nav className="z-20 pb-52 pt-52 pr-44 rounded-3xl rounded-r-none flex flex-col items-start w-full pl-24 gap-16 bg-[#FFF8EF] drop-shadow-sm">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-[#2D2D2D] font-medium text-2xl"
              onClick={toggleSideBar}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default SideBar
