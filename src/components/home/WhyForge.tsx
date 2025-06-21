import React from "react"
import Card from "../shared/Card"

const WhyForge = (): JSX.Element => {
  return (
    <div className="relative pl-[271px] pt-[100px] h-screen">
      <div className="relative">
        <span
          className="absolute font-bebas text-[142px] font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#484848_100%)]
 -tracking-normal"
        >
          WHY WE LOVE
        </span>
        <span
          className="absolute top-32 left-36 font-bebas text-[132px] font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#747474_100%)]
 -tracking-normal"
        >
          FORGE-CODE
        </span>
      </div>
      <div className="flex absolute gap-6 top-[360px] overflow-auto w-[80%]">
        {Array.from({length: 6}).map((_, idx) => {
          return (
            <Card key={idx}>
              <div className="flex flex-col gap-3">
                <img src="/images/home/why-logos.png" alt="" height={80} width={80} />
                <span className="text-white font-kanit text-title-small">
                  Forge feels like pair programming with someone who actually understands my stack.
                </span>
                <span className="text-white opacity-50 text-title-tiny font-normal">-Raj, Full-Stack Developer</span>
              </div>
            </Card>
          )
        })}
      </div>
      <img src="/images/home/bg-ellipse.svg" alt="ellipse" className="absolute -bottom-10" />
    </div>
  )
}

export default WhyForge
