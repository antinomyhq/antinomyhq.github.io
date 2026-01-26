import React from "react"
import GreaterThanUnderscoreIcon from "@site/static/icons/basic/gt-undescore-gray.svg"

type SectionTitleProps = {
  title: string
}

const SectionTitle = ({title}: SectionTitleProps): JSX.Element => {
  return (
    <div className="text-base sm:text-lg text-tailCall-terminal-text-secondary space-x-SPACE_01 font-vt323 tracking-wider flex items-center">
      <GreaterThanUnderscoreIcon className="h-3 sm:h-4 w-6" />
      <span>{title}</span>
    </div>
  )
}

export default SectionTitle
