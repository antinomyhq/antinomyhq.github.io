import React from "react"

type BenefitsCardProps = {
  title: string
  description: string
  imageUrl: string
  small: boolean
}

const BenefitsCard = ({title, description, imageUrl, small}: BenefitsCardProps) => {
  const lightImage = imageUrl.replace(/\.svg$/, "-light.svg")
  return (
    <div className="h-full flex flex-col bg-benefit-light-background border border-solid border-tailCall-light-900  dark:bg-[linear-gradient(to_bottom_right,_#000000,_#1B8783B2)] p-[1px] rounded-xl w-full md:w-96 xl:w-[550px]">
      <div className="flex flex-col gap-4 bg-benefit-light-background dark:bg-[linear-gradient(180deg,_#1E1C21_0%,_#000_100%)] text-white font-kanit w-full xl:max-w-[550px] rounded-xl p-4 sm:p-8 lg:px-14 lg:py-16 h-full">
        <div className="flex gap-3 items-center">
          <img src={imageUrl} alt="" className="hidden dark:block w-10 h-10 md:w-auto md:h-auto" />
          <img src={lightImage} alt="" className="block dark:hidden w-10 h-10 md:w-auto md:h-auto" />
          <span
            className={`font-kanit leading-7 text-tailCall-lightMode---neutral-800 dark:text-tailCall-lightMode---neutral-50 text-content-medium md:text-title-semi-large md:font-normal font-normal ${small ? "w-36 md:w-52" : "w-auto"} whitespace-normal break-words`}
          >
            {title}
          </span>
        </div>
        <p className="!mb-0 font-kanit text-title-tiny md:text-title-medium md:font-extralight font-light text-tailCall-lightMode---neutral-700 dark:text-tailCall-light-800 xl:tracking-[.5px] whitespace-normal break-words">
          {description}
        </p>
      </div>
    </div>
  )
}

export default BenefitsCard
