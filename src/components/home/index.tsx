import React from "react"

import HeroTitle from "./HeroTitle"
import Showcase from "./Showcase"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"
import OpenSource from "./OpenSource"
import Stats from "./Stats"
import HeroAnimation from "./HeroAnimation"
import TrustedBy from "./TrustedBy"
import {JSX} from "react/jsx-runtime"

const HomePage = (): JSX.Element => {
  return (
    <div>
      <HeroAnimation>
        <HeroTitle />
      </HeroAnimation>
      <Showcase />
      <HeroAnimation>
        <TrustedBy />
        <Stats />
      </HeroAnimation>
      <OpenSource />
    </div>
  )
}

export default HomePage
