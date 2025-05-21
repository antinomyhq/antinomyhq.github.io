import React from "react"

import Banner from "./Banner"
import Benefits from "./Benefits"
import Configuration from "./Configuration"
import IntroductionGif from "./IntroductionGif"
import WhyChooseForge from "./WhyChooseForge"

const HomePage = (): JSX.Element => {
  return (
    <div className="">
      <Banner />
      <Configuration />
      <IntroductionGif />
      <WhyChooseForge />
      <Benefits />
    </div>
  )
}

export default HomePage
