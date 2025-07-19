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

const Stats = (): JSX.Element => {
  const stats = [
    {
      value: 1790000000,
      suffix: "+",
      label: "Tokens",
      description: "/ day",
      infoLink: "https://openrouter.ai/apps?url=https%3A%2F%2Fforgecode.dev%2F",
      icon: Coins,
    },
    {
      value: 1400000,
      suffix: "+",
      label: "Lines of Code",
      description: "/ day",
      icon: Code,
    },
    {
      value: 3800,
      suffix: "+",
      label: "GitHub Stars",
      description: "",
      infoLink: "https://github.com/antinomyhq/forge",
      icon: Github,
    },
  ]

  return (
    <Section>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-baseline gap-8 w-full max-w-5xl mx-auto">
        {stats.map((stat, index) => {
          const isGithub = stat.label === "GitHub Stars"

          let Wrapper: React.ElementType = "div"
          const props: any = {
            key: index,
            className: "group p-2 flex flex-col items-center text-center w-full sm:w-auto",
            style: {minWidth: "180px"},
          }

          if (isGithub) {
            Wrapper = "a"
            props.href = stat.infoLink
            props.target = "_blank"
            props.rel = "noopener noreferrer"
            props.className += " no-underline hover:no-underline text-inherit"
          }

          return (
            <Wrapper {...props}>
              <stat.icon className="w-10 h-10 text-slate-500" />
              <div className="mt-2 text-3xl font-bold text-slate-900">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  formatter={formatNumber}
                  aria-label={stat.value.toLocaleString()}
                />
              </div>
              <div className="text-content-tiny sm:text-content-small text-slate-600 mt-1 h-8 flex flex-col justify-center">
                <div>
                  {stat.label} {stat.description}
                  {stat.infoLink &&
                    (isGithub ? (
                      <Info className="inline-block w-3 h-3 ml-1 text-slate-500" />
                    ) : (
                      <a href={stat.infoLink} target="_blank" rel="noopener noreferrer">
                        <Info className="inline-block w-3 h-3 ml-1 text-slate-500" />
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
