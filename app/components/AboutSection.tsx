"use client"

import { type FC } from "react"
import useSideBar from "~/hooks/use-side-bar"

interface AboutSectionProps {}

const getFontSize = (idx: number) => {
  switch (idx) {
    case 0:
      return "text-md"
    case 1:
      return "text-lg"
    case 2:
      return "text-xl"
    case 3:
      return "text-lg"
    case 4:
      return "text-md"
    default:
      return "text-xl"
  }
}

const getPadding = (idx: number, forShadow = false) => {
  switch (idx) {
    case 0:
      return forShadow ? "w-[4.8rem] h-[4.8rem]" : "w-20 h-20"
    case 1:
      return forShadow ? "w-[5.8rem] h-[5.8rem]" : "w-24 h-24"
    case 2:
      return forShadow ? "w-[6.8rem] h-[6.8rem]" : "w-28 h-28"
    case 3:
      return forShadow ? "w-[5.8rem] h-[5.8rem]" : "w-24 h-24"
    case 4:
      return forShadow ? "w-[4.8rem] h-[4.8rem]" : "w-20 h-20"
    default:
      forShadow ? "w-[6.8rem] h-[6.8rem]" : "w-28 h-28"
  }
}

const AboutSection: FC<AboutSectionProps> = () => {
  const { sideBarOpen } = useSideBar()

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-24"
    >
      <div className="relative flex flex-col items-center justify-center w-3/5 space-y-10">
        <div className="filter blur-3xl -left-24 w-56 h-96 absolute from-[#c2b9ff] to-[#ffb696] bg-gradient-to-b rounded-full top-12 -rotate-45 mix-blend-multiply"></div>
        {!sideBarOpen && (
          <div className="filter blur-3xl -right-2 w-60 h-60 absolute bg-[#c2b9ff] rounded-full top-36 mix-blend-multiply"></div>
        )}
        <p className="self-start w-full text-2xl font-normal leading-10 text-left">
          Whether you are seeking to lead a <br />
          balanced life or realize a dream, <br />
          trying to build your career or need <br />
          that impetus to grow, even if you are <br />
          running a small business or leading <br />a large
          organization, <br />
          <span className="pl-4">A coach</span> from our thrive team
          can
          <br />
          help you explore the infinite <br />
          possibilities that life has to offer.
        </p>
        <p
          className={`${
            sideBarOpen
              ? "self-start text-left"
              : "self-end text-right"
          } w-full text-2xl font-normal leading-10`}
        >
          We provide a range of programs <br />
          and packages on life coaching <br />
          and business coaching. <br />
          Thriving Quotient is about <br />
          coaching people to succeed and <br />
          grow in their work or life.
        </p>
      </div>
      <div className="flex items-center justify-start w-3/5 py-40 space-x-4">
        {["Clarity", "Focus", "Positivity", "Balance", "Growth"].map(
          (item, idx) => {
            return (
              <div
                key={item}
                className="relative flex flex-col items-center justify-center"
              >
                <div
                  className={`bg-gradient-to-r from-[#c2b9ff] to-[#ffb696] rounded-full absolute blur ${getPadding(
                    idx,
                    true,
                  )}`}
                ></div>
                <span
                  className={`${getFontSize(idx)} z-10 ${getPadding(
                    idx,
                  )} bg-[#FFF8EF] rounded-full flex items-center justify-center drop-shadow-sm font-urbanist font-medium`}
                >
                  {item}
                </span>
              </div>
            )
          },
        )}
      </div>
      <div className="w-full max-w-5xl">
        <div className="flex flex-col items-center justify-start gap-4">
          <h2 className="font-urbanist text-4xl">
            We preach the act of &lsquo;giving&rsquo;!
          </h2>
          <p className="-mx-32 text-2xl">
            Here&lsquo;s a few freebies for you to download and adapt.
            Join our newsletter where we spread positivity every
            month.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
