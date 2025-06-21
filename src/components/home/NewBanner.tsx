import React from "react"
import TrustedByMarquee from "./TrustedByMarquee"
import {companies} from "@site/src/constants"
import TerminalWithTabs from "../shared/TerminalWithTabs"

const Banner = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10 w-full h-auto overflow-auto">
      <div className="flex justify-around flex-col lg:flex-row gap-28 p-10">
        <div className="flex flex-col">
          <p className="text-white font-thin text-display-tiny opacity-80 max-w-[500px] mt-24 font-kanit">
            Forge is a non-intrusive light-weight AI assistant for - the terminal.
          </p>
          <div className="relative flex flex-col">
            <span className="-tracking-normal font-normal absolute -top-12 text-[200px] opacity-90 text-transparent bg-clip-text bg-[linear-gradient(280deg,_#fff_57.22%,_#373737_96.04%)] font-bebas">
              AI IN
            </span>
            <span className="-tracking-normal absolute top-28 left-20 text-[200px] opacity-90 text-transparent bg-clip-text bg-[linear-gradient(90deg,_#fff_57.22%,_#373737_96.04%)] font-bebas">
              SHELL
            </span>
          </div>
        </div>
        <div>
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
