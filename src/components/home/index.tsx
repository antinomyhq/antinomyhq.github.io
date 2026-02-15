import React from "react"

import Mission from "./Mission"
import Benefits from "./Benefits"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"
import FinalCTA from "./FinalCTA"
import OpenSource from "./OpenSource"
import Stats from "./Stats"
import HeroAnimation from "./HeroAnimation"
import TrustedBy from "./TrustedBy"
import {JSX} from "react/jsx-runtime"

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Benefits />
      <div className="relative">
        <HeroAnimation />
        <Mission />
        <TrustedBy />
        <Stats />
      </div>
      <OpenSource />
      <FinalCTA />
    </div>
  )
}

export default HomePage
