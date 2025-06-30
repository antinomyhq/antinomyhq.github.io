import React from "react"
import CopyCodeButton from "../shared/CopyCodeButton"

const GetStarted = (): JSX.Element => {
  return (
    <div className="relative p-4 xl:pt-28 xl:pl-28 xl:pr-24 xl:pb-20 h-screen">
      <div className="flex flex-col gap-3 relative">
        <span
          className="absolute top-0 font-bebas text-[48px] md:text-[96px] xl:text-[140px] font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#747474_100%)]
 -tracking-normal"
        >
          GET STARTED
        </span>
        <span className="text-white text-title-tiny xl:text-title-large font-normal font-kanit absolute top-10 left-48 md:left-96 md:top-20 xl:top-28 xl:left-[560px]">
          with
        </span>
        <span
          className="absolute top-14 left-20 sm:left-32 md:top-20 xl:top-32 xl:left-72 font-bebas text-[48px] md:text-[96px] xl:text-[140px] font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#747474_100%)]
 -tracking-normal"
        >
          FORGE-CODE
        </span>
        <span
          className="absolute top-28 left-28 sm:left-40 md:top-40 xl:top-64 xl:left-[450px] font-bebas text-[48px] md:text-[96px] xl:text-[132px] font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#747474_100%)]
 -tracking-normal"
        >
          OPEN-SOURCE
        </span>
        <span className="text-white text-title-tiny xl:text-title-large font-normal font-kanit absolute top-32 left-32 md:left-36 md:top-60 xl:top-[360px] xl:left-[400px]">
          An
        </span>
        <span className="text-white xl:text-title-large font-normal font-kanit absolute top-40 left-44 md:left-52 md:top-64 xl:top-[360px] xl:left-[800px]">
          Companion for Your Terminal
        </span>
      </div>
      <div className="flex flex-col gap-5 absolute top-60 md:top-80 xl:top-auto xl:bottom-32 xl:left-[550px] w-full xl:max-w-[600px] pr-8">
        <div className="bg-[#1E1C21] flex flex-col rounded-2xl">
          <div className="flex items-center gap-1 px-4 py-3 bg-[#18171A] rounded-t-2xl">
            <div className="h-4 w-4 bg-[#D9D9D9] rounded-full opacity-50"></div>
            <div className="h-4 w-4 bg-[#D9D9D9] rounded-full opacity-20"></div>
            <div className="h-4 w-4 bg-[#D9D9D9] rounded-full opacity-10"></div>
          </div>
          <div className="pt-8 px-8 pb-4">
            <span className="text-[#30EDE6] font-space text-content-tiny sm:text-title-medium font-normal -tracking-wide">
              # Install Forge globally using npm
            </span>
            <br />
            <span className="text-[#30EDE6] font-space text-content-tiny sm:text-title-medium font-normal -tracking-wide">
              npm install -g @antinomyhq/forge
            </span>
          </div>
        </div>
        <div>
          <CopyCodeButton />
        </div>
      </div>
    </div>
  )
}

export default GetStarted
