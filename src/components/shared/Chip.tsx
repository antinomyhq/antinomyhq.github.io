import React from "react"

type ChipProps = {
  label: string
  onClick?: () => void
}

const Chip = ({label, onClick}: ChipProps) => {
  return (
    <div
      role="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick?.()
      }}
      className="bg-cyan-to-gray p-[1px] rounded-2xl h-fit flex-shrink-0 cursor-pointer w-fit"
    >
      <div className="flex__centered px-5 py-1 bg-tailCall-light-1200 dark:bg-black rounded-2xl w-fit">
        <span className="block font-kanit text-tailCall-darkMode---neutral-600 dark:text-white opacity-100 dark:opacity-50 text-content-tiny md:text-title-tiny w-max !font-normal">
          {label}
        </span>
      </div>
    </div>
  )
}
export default Chip
