import React from "react"

type BenefitsCardProps = {
  title: string
  description: string
}

const BenefitsCard = ({title, description}: BenefitsCardProps) => {
  return (
    <div className="bg-[linear-gradient(to_bottom_right,_#000000,_#1B8783B2)] p-[2px] rounded-3xl">
      <div className="flex flex-col gap-4 bg-[linear-gradient(180deg,_#1E1C21_0%,_#000_100%)] text-white font-kanit max-w-[450px] rounded-3xl px-14 py-16">
        <h1 className="text-title-semi-large font-normal">{title}</h1>
        <p className="text-title-medium font-extralight">{description}</p>
      </div>
    </div>
  )
}

export default BenefitsCard
