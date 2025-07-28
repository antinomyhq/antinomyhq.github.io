import React from "react"
import AnimatedCounter from "./AnimateNumber"

type StatCardProps = {
  title: string
  stat: number
  suffix?: string
  decimals?: number
}

const StatCard = ({title, stat, suffix, decimals}: StatCardProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <span className="font-space font-bold text-title-tiny md:font-normal md:text-title-medium text-tailCall-darkGray whitespace-nowrap">
        {title}
      </span>
      <h2 className="font-space text-title-large md:text-display-tiny lg:text-display-medium md:font-normal font-normal text-tailCall-lightMode---primary-700 dark:text-tailCall-cyan leading-tight">
        <AnimatedCounter end={stat} suffix={suffix} decimals={decimals} />
      </h2>
    </div>
  )
}

export default StatCard
