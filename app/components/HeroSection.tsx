import { type FC } from "react"
import { HiOutlineArrowDown as ArrowDownIcon } from "react-icons/hi2"

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center min-h-screen from-[#4932A2] to-[#D65922] bg-gradient-to-b relative"
    >
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto space-y-10 text-white">
        <h1 className="text-8xl min-w-full text-left">
          Don&apos;t just survive, <br />
          <span className="ml-16 italic font-medium">thrive.</span>
        </h1>
        <div className="font-urbanist flex flex-col items-end justify-end min-w-full space-y-5 text-2xl leading-6 tracking-wide text-right">
          <p>
            Thriving Quotient is about leading <br />
            trasformational change from the inside out in <br />
            your professional and personal life.
          </p>
          <p>
            We unravel the science, psychology and <br />
            philosphy behind self-care and what it means <br />
            to lead a fulfilled life.
          </p>
        </div>
      </div>
      <a
        href="#about"
        className="bottom-10 left-10 absolute"
      >
        <ArrowDownIcon className="animate-bounce w-10 h-10 text-white" />
      </a>
    </section>
  )
}

export default HeroSection
