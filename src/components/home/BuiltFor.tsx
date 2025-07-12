import React from "react"
import CopyCodeButton from "../shared/CopyCodeButton"
import {StatsForDevelopers} from "@site/src/constants"
import StatCard from "../shared/StatCard"
import SpotlightSpan from "./SpotlightCursor"

const BuiltFor = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] z-30 md:mt-40 xl:mt-64 relative flex flex-col min-h-fit items-start xl:items-start lg:justify-center lg:items-start gap-10 md:gap-40 xl:gap-56 md:flex-row w-full p-5 md:px-20 lg:px-32 lg:py-16 overflow-hidden">
        <div className="flex flex-col md:gap-10 gap-5 items-start">
          {StatsForDevelopers.map(({title, stat, suffix, decimals}) => {
            return <StatCard title={title} stat={stat} suffix={suffix} key={title} decimals={decimals} />
          })}
        </div>
        <div className="w-full flex flex-col items-baseline justify-center">
          <SpotlightSpan
            showHighlighted
            text="BUILT FOR BUILDERS,"
            className="font-bebas text-display-medium md:text-display-large md:font-normal xl:text-[120px] xl:font-normal font-normal -tracking-normal leading-[60px] md:leading-[90px] xl:leading-[120px]"
          />
          <br />

          <SpotlightSpan
            text="BACKED BY DATA"
            className="-mt-6 md:-mt-4 xl:-mt-10 font-bebas text-display-medium md:text-display-large md:font-normal xl:text-[120px] xl:font-normal font-normal -tracking-normal md:leading-[90px] xl:leading-[120px]"
          />

          <div className="mt-8">
            <CopyCodeButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuiltFor
