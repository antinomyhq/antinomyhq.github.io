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
      <div className="grid grid-cols-3 gap-1 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-5xl mx-auto place-items-center">
        {stats.map((stat) => {
          const isGithub = stat.label === "GitHub Stars"

          let Wrapper: React.ElementType = "div"
          const wrapperProps: any = {
            className: "group p-0.5 sm:p-2 flex flex-col items-center text-center w-full",
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
              <stat.icon className="w-4 h-4 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-slate-500" />
              <div className="mt-0.5 sm:mt-2 text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  formatter={formatNumber}
                  aria-label={stat.value.toLocaleString()}
                />
              </div>
              <div className="text-[9px] sm:text-content-tiny md:text-content-small text-slate-600 mt-0.5 sm:mt-1 min-h-[1.75rem] sm:min-h-[2rem] md:h-8 flex flex-col justify-center leading-tight">
                <div>
                  {stat.label} {stat.description}
                  {stat.infoLink &&
                    (isGithub ? (
                      <Info className="inline-block w-2 h-2 sm:w-3 sm:h-3 ml-0.5 sm:ml-1 text-slate-500" />
                    ) : (
                      <a href={stat.infoLink} target="_blank" rel="noopener noreferrer">
                        <Info className="inline-block w-2 h-2 sm:w-3 sm:h-3 ml-0.5 sm:ml-1 text-slate-500" />
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
