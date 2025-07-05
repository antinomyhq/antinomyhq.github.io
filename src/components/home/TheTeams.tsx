import React from "react"
import CopyCodeButton from "../shared/CopyCodeButton"
import TechCard from "../shared/TechCard"
import {TechDetails, TECHS} from "@site/src/constants"

const TheTeams = (): JSX.Element => {
  return (
    <div className="relative flex flex-col xl:flex-row justify-between p-5 xl:px-24 xl:py-28">
      <div className="flex flex-col gap-24">
        <div className=" flex flex-col">
          <span
            className="absolute top-3 font-bebas text-display-medium md:text-display-large xl:text-[140px] md:font-normal font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#747474_100%)]
 -tracking-normal"
          >
            THE TEAMS
          </span>
          <br />
          <span
            className="absolute top-32 font-bebas text-display-medium md:text-display-large xl:text-[140px] md:font-normal font-normal text-transparent bg-clip-text bg-[radial-gradient(3039.26%_162.31%_at_88.96%_175.81%,_#FFF_0%,_#747474_100%)]
 -tracking-normal"
          >
            AT WORK
          </span>
          <div className="absolute top-52 xl:top-[180px] xl:left-[460px]">
            <CopyCodeButton />
          </div>
        </div>
        <ul className="flex flex-row xl:flex-col list-none gap-6 font-kanit md:text-title-medium md:font-normal xl:font-normal xl:text-title-large font-normal text-white mt-40">
          {TECHS.map((tech) => {
            return (
              <li key={tech} className="opacity-30 hover:opacity-100 cursor-pointer transition-opacity duration-500">
                {tech}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-5 overflow-scroll h-[60vh]">
        {TechDetails.map(({title, descriptions, avatars}) => {
          return <TechCard key={title} title={title} description={descriptions} avatars={avatars} />
        })}
      </div>
    </div>
  )
}

export default TheTeams
