import React from "react"

type StatCardProps = {
  title: string
  stat: string
}

const StatCard = ({title, stat}: StatCardProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <span className="font-space font-bold text-title-medium text-tailCall-darkGray">{title}</span>
      <h1 className="font-space text-display-medium font-normal text-tailCall-cyan leading-tight">{stat}</h1>
    </div>
  )
}

export default StatCard
