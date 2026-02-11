import React from "react"

import Banner from "./Banner"
import Benefits from "./Benefits"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"
import FinalCTA from "./FinalCTA"
import Stats from "./Stats"
import HeroAnimation from "./HeroAnimation"

const HomePage = (): JSX.Element => {
  return (
    <div>
      <div className="relative">
        <HeroAnimation />
        <Banner />
        <Stats />
      </div>
      <Benefits />
      <FinalCTA />
    </div>
  )
}

export default HomePage
