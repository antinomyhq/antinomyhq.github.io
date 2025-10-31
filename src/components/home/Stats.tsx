import React from "react"
import Section from "../shared/Section"
import AnimatedCounter from "../shared/AnimatedCounter"
import {Info, Coins, Code, Github} from "lucide-react"
import TrustedByMarquee from "./TrustedByMarquee"
import {clientLogos} from "@site/src/constants"

const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B"
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

const Stats: React.FC = () => {
  const stats = [
    {
      value: 9500000000,
      suffix: "+",
      label: "Tokens",
      description: "/ day",
      infoLink: "https://openrouter.ai/apps?url=https%3A%2F%2Fforgecode.dev%2F",
      icon: Coins,
    },
    {
      value: 6100000,
      suffix: "+",
      label: "Lines of Code",
      description: "/ day",
      icon: Code,
    },
    {
      value: 4500,
      suffix: "+",
      label: "GitHub Stars",
      description: "",
      infoLink: "https://github.com/antinomyhq/forge",
      icon: Github,
    },
  ]

  return (
    <Section>
      <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl mx-auto place-items-center">
        {stats.map((stat) => {
          const isGithub = stat.label === "GitHub Stars"

          let Wrapper: React.ElementType = "div"
          const wrapperProps: any = {
            className:
              "group p-1 xs:p-2 flex flex-col items-center text-center w-full",
          }

          if (isGithub) {
            Wrapper = "a"
            wrapperProps.href = stat.infoLink
            wrapperProps.target = "_blank"
            wrapperProps.rel = "noopener noreferrer"
            wrapperProps.className += " no-underline hover:no-underline text-inherit"
          }

          return (
            <Wrapper key={stat.label} {...wrapperProps}>
              <stat.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-500" />
              <div className="mt-1 xs:mt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  formatter={formatNumber}
                  aria-label={stat.value.toLocaleString()}
                />
              </div>
              <div className="text-[10px] xs:text-xs sm:text-content-tiny md:text-content-small text-slate-600 mt-0.5 xs:mt-1 min-h-[2rem] xs:min-h-[2.5rem] sm:h-8 flex flex-col justify-center">
                <div>
                  {stat.label} {stat.description}
                  {stat.infoLink &&
                    (isGithub ? (
                      <Info className="inline-block w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 ml-0.5 xs:ml-1 text-slate-500" />
                    ) : (
                      <a href={stat.infoLink} target="_blank" rel="noopener noreferrer">
                        <Info className="inline-block w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 ml-0.5 xs:ml-1 text-slate-500" />
                      </a>
                    ))}
                </div>
              </div>
            </Wrapper>
          )
        })}
      </div>
      <div className="mt-5">
        <TrustedByMarquee title="Trusted by developers at" logos={clientLogos} />
      </div>
    </Section>
  )
}

export default Stats
