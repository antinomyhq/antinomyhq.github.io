import React from "react"

import Banner from "./Banner"
import Benefits from "./Benefits"
// import Configuration from "./Configuration"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"
import FinalCTA from "./FinalCTA"
import Stats from "./Stats"

const HomePage = (): JSX.Element => {
  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <Banner />
      <Stats />
      {/* <Configuration /> */}
      <Benefits />
      <FinalCTA />
    </div>
  )
}

export default HomePage
