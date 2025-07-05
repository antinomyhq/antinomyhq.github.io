import React from "react"

type StatCardProps = {
  title: string
  stat: string
}

const StatCard = ({title, stat}: StatCardProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <span className="font-space font-bold text-title-tiny md:font-normal md:text-title-medium text-tailCall-darkGray">
        {title}
      </span>
      <h1 className="font-space text-title-large md:text-display-tiny lg:text-display-medium md:font-normal font-normal text-tailCall-cyan leading-tight">
        {stat}
      </h1>
    </div>
  )
}

export default StatCard
