import React from "react"
import AnimatedCounter from "./AnimateNumber"
import {common_styles} from "@site/src/constants/styles"

type StatCardProps = {
  title: string
  stat: number
  suffix?: string
  decimals?: number
}

const StatCard = ({title, stat, suffix, decimals}: StatCardProps): JSX.Element => {
  return (
    <div className="flex__column">
      <span className="font-space font-bold text-title-tiny md:font-normal md:text-title-medium text-tailCall-darkGray whitespace-nowrap">
        {title}
      </span>
      <h1
        className={`font-space text-title-large md:text-display-tiny lg:text-display-medium md:font-normal font-normal leading-tight ${common_styles.theme_text}`}
      >
        <AnimatedCounter end={stat} suffix={suffix} decimals={decimals} />
      </h1>
    </div>
  )
}

export default StatCard
