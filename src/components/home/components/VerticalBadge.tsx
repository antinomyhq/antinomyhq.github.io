import React from "react"

type VerticalBadgeProps = {
  top: string
  rightOffset: string
  bgColor: string
  icon: React.ReactNode
  title: string
  subtitle: string
}

export const VerticalBadge: React.FC<VerticalBadgeProps> = ({top, rightOffset, bgColor, icon, title, subtitle}) => {
  return (
    <div
      className={`py-2 px-4 fixed ${rightOffset} ${top} flex items-center gap-2 rounded-b-[8px] rotate-90 z-50`}
      style={{backgroundColor: bgColor}}
    >
      <span className="bg-[#FFFFFF33] p-1 h-6 w-6 rounded-full text-white flex items-center justify-center text-content-mini">
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-white uppercase font-kanit text-content-mini font-semibold">{subtitle}</span>
        <span className="text-white font-kanit text-title-tiny">{title}</span>
      </div>
    </div>
  )
}
