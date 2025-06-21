import React from "react"
import CopyCodeButton from "../shared/CopyCodeButton"

const GetStarted = (): JSX.Element => {
  return (
    <div className="relative pt-28 pl-28 pr-24 pb-20 h-screen">
      <div className="flex flex-col gap-3 relative">
        <span
          className="absolute top-0 font-bebas text-[140px] font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#747474_100%)]
 -tracking-normal"
        >
          GET STARTED
        </span>
        <span className="text-white text-title-large font-normal font-kanit absolute top-28 left-[560px]">with</span>
        <span
          className="absolute top-32 left-72 font-bebas text-[140px] font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#747474_100%)]
 -tracking-normal"
        >
          FORGE-CODE
        </span>
        <span
          className="absolute top-64 left-[450px] font-bebas text-[132px] font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#747474_100%)]
 -tracking-normal"
        >
          OPEN-SOURCE
        </span>
        <span className="text-white text-title-large font-normal font-kanit absolute top-[360px] left-[400px]">An</span>
        <span className="text-white text-title-large font-normal font-kanit absolute top-[360px] left-[800px]">
          Companion for Your Terminal
        </span>
      </div>
      <div className="flex flex-col gap-5 absolute bottom-32 left-[550px]">
        <div className="bg-[#1E1C21] max-w-[600px] flex flex-col rounded-2xl">
          <div className="flex items-center gap-1 px-4 py-3 bg-[#18171A] rounded-t-2xl">
            <div className="h-4 w-4 bg-[#D9D9D9] rounded-full opacity-50"></div>
            <div className="h-4 w-4 bg-[#D9D9D9] rounded-full opacity-20"></div>
            <div className="h-4 w-4 bg-[#D9D9D9] rounded-full opacity-10"></div>
          </div>
          <div className="pt-9 px-7 pb-5">
            <span className="text-[#30EDE6] font-space text-title-medium font-normal -tracking-wide">
              # Install Forge globally using npm
            </span>
            <br />
            <span className="text-[#30EDE6] font-space text-title-medium font-normal -tracking-wide">
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
