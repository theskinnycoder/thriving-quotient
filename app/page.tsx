import { type FC } from "react"
import LayoutWithHeader from "~/layouts/LayoutWithHeader"
import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen">
        <HeroSection />
      </section>
      <LayoutWithHeader>
        <AboutSection />
      </LayoutWithHeader>
    </>
  )
}

export default HomePage
