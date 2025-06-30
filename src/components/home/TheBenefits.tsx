import React from "react"
import Card from "../shared/Card"
import BenefitsCard from "../shared/BenefitsCard"
import {BENEFITS} from "@site/src/constants"

const TheBenefits = (): JSX.Element => {
  return (
    <div className="relative h-screen flex flex-col p-8 xl:pt-20 overflow-hidden">
      <div className="relative">
        <img src="/images/home/circle-group.svg" alt="ellipse" className="w-full h-screen" />
        <img
          src="/images/home/code-logo.svg"
          alt="code"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <span
        className="absolute top-0 left-8 xl:left-60 font-bebas text-display-medium md:text-display-large xl:text-[142px] font-normal md:font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#484848_100%)]
 -tracking-normal"
      >
        THE
      </span>
      <span
        className="absolute top-20 left-24 xl:top-36 xl:left-80 font-bebas text-display-medium md:text-display-large xl:text-[142px] font-normal md:font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#484848_100%)]
 -tracking-normal"
      >
        BENEFITS
      </span>
      <div className="absolute left-10 md:left-auto right-10 lg:right-40 top-96">
        <Card variant="thin">
          {BENEFITS.map(({title, description}) => {
            return <BenefitsCard key={title} title={title} description={description} />
          })}
        </Card>
      </div>
    </div>
  )
}

export default TheBenefits
