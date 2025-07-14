import React from "react"

import Banner from "./Banner"
import Benefits from "./Benefits"
import Configuration from "./Configuration"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"
import Leaderboard from "./Leaderboard"
import FinalCTA from "./FinalCTA"

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Banner />
      {/* <IntroductionGif /> */}
      <Configuration />
      {/* <WhyChooseForge /> */}
      <Benefits />
      <Leaderboard />
      <FinalCTA />
    </div>
  )
}

export default HomePage
