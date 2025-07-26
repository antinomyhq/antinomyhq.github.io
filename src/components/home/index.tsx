import React from "react"
import {Banner, TheBenefits, BuiltFor, GetStarted, WhyForge} from "./sections"

const HomePage = (): JSX.Element => {
  return (
    <div className="relative flex flex-col dark:bg-tailCall-dark-700 bg-[#F1F1F1]">
      <Banner />
      <GetStarted />
      <TheBenefits />
      <WhyForge />
      <BuiltFor />
      {/* <div className="bg-[#632F2F] py-2 px-4 fixed -right-16 top-[170px] flex items-center gap-2 rounded-b-[8px] rotate-90 z-50">
        <span className="bg-[#FFFFFF33] p-1 h-6 w-6 rounded-full text-white flex items-center justify-center text-content-mini">
          P
        </span>
        <div className="flex flex-col">
          <span className="text-white uppercase font-kanit text-content-mini font-semibold">Featured on</span>
          <span className="text-white font-kanit text-title-tiny">Product Hunt</span>
        </div>
      </div>
      <div className="bg-[#545454] py-2 px-4 fixed -right-12 top-[335px] flex items-center gap-2 rounded-b-[8px] rotate-90 z-50">
        <span className="bg-[#FFFFFF33] p-1 h-6 w-6 rounded-full text-white flex items-center justify-center text-content-mini">
          <img src="/icons/basic/GithubLogo.svg" alt="Github Logo" />
        </span>
        <div className="flex flex-col">
          <span className="text-white uppercase font-kanit text-content-mini font-semibold">Featured on</span>
          <span className="text-white font-kanit text-title-tiny">Github</span>
        </div>
      </div> */}
      {/* <TheTeams /> */}
    </div>
  )
}

export default HomePage
