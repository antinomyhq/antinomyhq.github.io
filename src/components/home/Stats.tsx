import React from "react"
import Heading from "@theme/Heading"
import Section from "../shared/Section"
import SectionTitle from "../shared/SectionTitle"
import AnimatedCounter from "../shared/AnimatedCounter"
import {Info} from "lucide-react"

const Stats = (): JSX.Element => {
  const stats = [
    {
      value: 1000000000,
      suffix: "+",
      label: "Tokens Consumed",
      description: "/ day",
      infoLink: "https://openrouter.ai/apps?url=https%3A%2F%2Fforgecode.dev%2F",
    },
    {
      value: 1000000,
      suffix: "+",
      label: "Lines of Code Generated",
      description: "/ day",
    },
  ]

  return (
    <Section>
      <div>
        <SectionTitle title="Stats" />
        <div className="h-fit sm:flex-row sm:items-center sm:space-x-SPACE_10 lg:space-x-SPACE_20">
          <Heading as="h3" className="text-title-large sm:text-display-tiny lg:text-display-small md:w-[65%]">
            Accelerating Development Worldwide
          </Heading>
        </div>
        <p className="text-content-small sm:text-content-medium text-slate-600 mt-2">
          #1 CLI Coding Agent on OpenRouter
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {stats.map((stat, index) => (
          <div key={index} className="group p-6 flex flex-col items-start cursor-pointer">
            <div className="flex-grow">
              <div className="mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} className="text-black block" />
                <span className="text-content-tiny sm:text-content-small text-slate-600 block">
                  {stat.label} {stat.description}
                  {stat.infoLink && (
                    <Info
                      className="inline-block w-3 h-3 ml-1 cursor-pointer text-slate-500 hover:text-slate-700 transition-colors"
                      onClick={() => window.open(stat.infoLink, "_blank")}
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Stats
