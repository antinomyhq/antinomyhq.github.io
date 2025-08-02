import React from "react"

type BenefitsCardProps = {
  title: string
  description: string
  imageUrl: string
  lightImage: string
  small: boolean
}

const BenefitsCard = ({title, description, imageUrl, small, lightImage}: BenefitsCardProps) => {
  return (
    <div className="h-full flex flex-col bg-tailCall-lightMode---neutral-200 dark:bg-custom-diagonal p-[1px] rounded-[13px] w-full md:w-96 xl:w-[550px]">
      <div className="flex flex-col gap-4 bg-benefit-light-background dark:bg-[linear-gradient(180deg,_#1E1C21_0%,_#000_100%)] text-white font-kanit w-full xl:max-w-[550px] rounded-[12px] p-4 sm:p-8 lg:px-12 lg:py-12 h-full">
        <div className="flex flex-col gap-1">
          <span
            className={`font-kanit leading-7 text-tailCall-lightMode---neutral-800 dark:text-tailCall-lightMode---neutral-50 text-content-medium md:text-title-semi-large md:font-normal font-normal w-auto whitespace-normal break-words`}
          >
            {title}
          </span>
          <p className="!mb-0 font-kanit text-title-tiny md:text-title-medium md:font-extralight font-light text-tailCall-lightMode---neutral-700 dark:text-tailCall-light-800 xl:tracking-[.5px] whitespace-normal break-words">
            {description}
          </p>
        </div>
        <img
          src={imageUrl}
          alt={`${title}-image`}
          className="hidden dark:block w-full h-[250px] md:h-auto object-contain"
        />
        <img
          src={lightImage}
          alt={`${title}-image-light`}
          className="block dark:hidden w-full h-[250px] md:h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default BenefitsCard
