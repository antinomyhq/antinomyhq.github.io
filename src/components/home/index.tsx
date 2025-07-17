import React from "react"

import Banner from "./Banner"
import Benefits from "./Benefits"
import Configuration from "./Configuration"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"
import FinalCTA from "./FinalCTA"
import Stats from "./Stats"
import Testimonials from "./Testimonials"

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Banner />
      {/* <IntroductionGif /> */}
      <Configuration />
      <Stats />
      {/* <WhyChooseForge /> */}
      <Benefits />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}

export default HomePage
