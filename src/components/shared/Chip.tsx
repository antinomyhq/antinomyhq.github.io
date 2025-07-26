import React from "react"

type ChipProps = {
  label: string
}

const Chip = ({label}: ChipProps) => {
  return (
    <div className="bg-[linear-gradient(90deg,_#30EDE6_0%,_#7B7B7B_99%)] p-[1px] rounded-2xl h-fit flex-shrink-0">
      <div className="flex items-center justify-center px-5 py-1 bg-[#f1f1f1] dark:bg-black rounded-2xl">
        <span className="block font-kanit text-tailCall-darkMode---neutral-600 dark:text-white opacity-100 dark:opacity-50 text-content-tiny md:text-title-tiny w-max !font-normal">
          {label}
        </span>
      </div>
    </div>
  )
}

export default Chip
