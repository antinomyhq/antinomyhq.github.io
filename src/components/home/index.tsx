import React from "react"

import Navbar from "../shared/Navbar"
import Banner from "./NewBanner"
import GetStarted from "./GetStarted"
import WhyForge from "./WhyForge"
import TheBenefits from "./TheBenefits"
import BuiltFor from "./BuiltFor"
import TheTeams from "./TheTeams"
import {ThemeProvider} from "@site/src/theme/ThemeProvider/ThemeProvider"

const HomePage = (): JSX.Element => {
  return (
    <ThemeProvider>
      <div className="relative flex flex-col dark:bg-tailCall-dark-700 bg-[#F1F1F1]">
        <Navbar />
        <Banner />
        <GetStarted />
        <WhyForge />
        <TheBenefits />
        <BuiltFor />
        {/* <TheTeams /> */}
      </div>
    </ThemeProvider>
  )
}

export default HomePage
