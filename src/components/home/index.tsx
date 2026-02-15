import React from "react"

import Banner from "./Banner"
import Benefits from "./Benefits"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"
import FinalCTA from "./FinalCTA"
import Stats from "./Stats"
import HeroAnimation from "./HeroAnimation"
import TrustedBy from "./TrustedBy"
import VideoCast from "./VideoCast"
import {JSX} from "react/jsx-runtime"

const HomePage = (): JSX.Element => {
  return (
    <div>
      <div className="relative">
        <HeroAnimation />
        <Banner />
      </div>
      <TrustedBy />
      <VideoCast />
      <Benefits />
      <Stats />
      <FinalCTA />
    </div>
  )
}

export default HomePage
