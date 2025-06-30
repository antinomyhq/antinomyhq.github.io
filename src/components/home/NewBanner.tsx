import React from "react"
import TrustedByMarquee from "./TrustedByMarquee"
import {companies} from "@site/src/constants"
import TerminalWithTabs from "../shared/TerminalWithTabs"

const Banner = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full h-auto overflow-auto">
      <div className="flex justify-center flex-col lg:flex-row gap-36 p-10">
        <div className="flex md:hidden lg:flex flex-col">
          <p className="text-white font-thin md:font-thin lg:font-thin text-title-medium lg:text-display-tiny opacity-80 max-w-[500px] md:mt-24 font-kanit">
            Forge is a non-intrusive light-weight AI assistant for - the terminal.
          </p>
          <div className="relative flex flex-col">
            <span className="-tracking-normal font-normal absolute -top-12 text-[100px] xl:text-[200px] opacity-90 text-transparent bg-clip-text bg-[linear-gradient(280deg,_#fff_57.22%,_#373737_96.04%)] font-bebas">
              AI IN
            </span>
            <span className="-tracking-normal absolute top-10 lg:top-28 left-20 text-[100px] xl:text-[200px] opacity-90 text-transparent bg-clip-text bg-[linear-gradient(90deg,_#fff_57.22%,_#373737_96.04%)] font-bebas">
              SHELL
            </span>
          </div>
        </div>
        <div className="relative hidden md:flex lg:hidden flex-col">
          <div className="relative flex flex-col">
            <span className="absolute -tracking-normal font-normal text-[200px] opacity-90 text-transparent bg-clip-text bg-[linear-gradient(280deg,_#fff_57.22%,_#373737_96.04%)] font-bebas">
              AI IN
            </span>
            <span className="absolute top-40 left-20 -tracking-normal text-[200px] opacity-90 text-transparent bg-clip-text bg-[linear-gradient(90deg,_#fff_57.22%,_#373737_96.04%)] font-bebas">
              SHELL
            </span>
          </div>
          <p className="absolute left-80 text-white font-thin text-title-semi-large lg:text-display-tiny opacity-80 max-w-[500px] mt-24 font-kanit">
            Forge is a non-intrusive light-weight AI assistant for - the terminal.
          </p>
        </div>
        <div className="mt-12 md:mt-60 lg:mt-10">
          <TerminalWithTabs />
        </div>
      </div>
      <div className="w-full px-10 h-full">
        <TrustedByMarquee logos={companies} />
      </div>
    </div>
  )
}

export default Banner
