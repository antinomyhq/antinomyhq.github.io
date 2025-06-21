import React from "react"

import Aside from "./Aside"
import Navbar from "../shared/Navbar."
import Banner from "./NewBanner"
import GetStarted from "./GetStarted"
import WhyForge from "./WhyForge"
import TheBenefits from "./TheBenefits"
import BuiltFor from "./BuiltFor"
import TheTeams from "./TheTeams"
import Footer from "./Footer"

const HomePage = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-black">
      <Aside />
      <div className="overflow-auto w-full">
        <Navbar />
        <Banner />
        <GetStarted />
        <WhyForge />
        <TheBenefits />
        <BuiltFor />
        <TheTeams />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
