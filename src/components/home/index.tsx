import React from "react"

import Banner from "./Banner"
import Benefits from "./Benefits"
import Configuration from "./Configuration"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"
import FinalCTA from "./FinalCTA"
import Stats from "./Stats"

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Banner />
      <Stats />
      <Configuration />

      {/* <WhyChooseForge /> */}
      <Benefits />
      <FinalCTA />
    </div>
  )
}

export default HomePage
