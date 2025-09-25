import React from "react"

type AIProviderCardProps = {
  title: string
  lightLogoUrl: string
  darkLogoUrl: string
}

const AIProviderCard = ({title, lightLogoUrl, darkLogoUrl}: AIProviderCardProps) => {
  return (
    <div className="cursor-pointer p-[1px] bg-transparent group hover:bg-[linear-gradient(180deg,rgba(186,_225,_225,_1)_0%,_rgba(0,_166,_166,_1)_100%)] hover:dark:bg-[linear-gradient(180deg,rgba(48,_237,_230,_1)_0%,_rgba(7,_101,_104,_1)_100%)] rounded-[10px]">
      <div className="relative px-8 py-4 flex flex-col gap-1 items-center h-full bg-transparent group-hover:bg-white group-hover:dark:bg-black dark:bg-black rounded-[10px]">
        <div className="z-10 w-16 h-16 mb-3">
          {/* Light mode image */}
          <img src={lightLogoUrl} alt={`${title} light`} className="block dark:hidden" />
          {/* Dark mode image */}
          <img src={darkLogoUrl} alt={`${title} dark`} className="hidden dark:block" />
        </div>
        <span className="z-10 font-kanit text-tailCall-darkMode---neutral-400 font-light text-title-medium !text-[22px]">
          {title}
        </span>
        <div className="z-0 absolute bottom-0 h-32 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-100 bg-[radial-gradient(67.39%_67.39%_at_50%_130.43%,_#00CEC9_0%,_#FFF_100%)] dark:bg-[radial-gradient(67.39%_67.39%_at_50%_130.43%,_#30EDE6_0%,_#000_100%)] rounded-b-[10px]"></div>
      </div>
    </div>
  )
}

export default AIProviderCard
