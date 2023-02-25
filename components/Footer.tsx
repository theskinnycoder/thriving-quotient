import { type FC } from "react"
import {
  FiInstagram as InstagramIcon,
  FiLinkedin as LinkedInIcon,
  FiYoutube as YouTubeIcon,
} from "react-icons/fi"
import { HiOutlineArrowRight as ArrowRightIcon } from "react-icons/hi2"

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer
      id="footer"
      className="font-urbanist relative flex items-center justify-center w-full p-0 font-medium"
    >
      <div className="absolute from-[#c2b9ff] to-[#ffb696] bg-gradient-to-r blur-lg h-36 inset-x-0 bottom-0"></div>
      <div className="h-36 z-10 flex items-center justify-between w-full px-10 bg-[#FCF9F1]">
        <div className="flex flex-col items-start justify-center space-y-1">
          <label
            htmlFor="newsletter"
            className="text-lg"
          >
            Stay in the positivity loop:
          </label>
          <div className="relative">
            <input
              type="email"
              id="newsletter"
              name="newsletter"
              className="placeholder:text-black focus:border-black focus:outline-none focus:ring-0 bg-inherit w-52 relative px-4 py-1 border-2 border-black rounded-l-full rounded-r-full"
              placeholder="Email"
            />
            <button className="right-3 absolute inset-y-0">
              <ArrowRightIcon className="w-4 h-4 text-black stroke-2" />
            </button>
          </div>
        </div>
        <div className="gap-7 flex items-center justify-center">
          <a
            href="https://www.instagram.com/thrivingquotient/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="w-8 h-8 text-black" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCZ8Y2Z2YQZ2Z2YQZ2Z2YQZ2"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon className="w-8 h-8 text-black" />
          </a>
          <a
            href="https://www.linkedin.com/company/thrivingquotient/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="w-8 h-8 text-black" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
