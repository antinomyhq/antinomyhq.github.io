import React from "react"

import Banner from "./Banner"
import Benefits from "./Benefits"
import Configuration from "./Configuration"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"
import Leaderboard from "./Leaderboard"
import FinalCTA from "./FinalCTA"
import Stats from "./Stats"

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Banner />
      {/* <IntroductionGif /> */}
      <Configuration />
      <Stats />
      {/* <WhyChooseForge /> */}
      <Benefits />
      <Leaderboard />
      <FinalCTA />
    </div>
  )
}

export default HomePage
