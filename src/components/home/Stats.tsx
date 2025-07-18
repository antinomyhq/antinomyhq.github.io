import React from "react"
import Section from "../shared/Section"
import AnimatedCounter from "../shared/AnimatedCounter"
import {Info, Coins, Code} from "lucide-react"
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
      label: "Tokens Consumed",
      description: "/ day",
      infoLink: "https://openrouter.ai/apps?url=https%3A%2F%2Fforgecode.dev%2F",
      icon: Coins,
    },
    {
      value: 1400000,
      suffix: "+",
      label: "Lines of Code Generated",
      description: "/ day",
      icon: Code,
    },
  ]

  return (
    <Section>
      <div className="flex flex-wrap justify-center items-start gap-4 w-full max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group p-2 flex flex-col items-center cursor-pointer text-center min-w-0 flex-1 max-w-sm"
          >
            <div className="flex items-baseline">
              <stat.icon className="w-10 h-10 text-slate-500" />
              <div>
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  formatter={formatNumber}
                  aria-label={stat.value.toLocaleString()}
                />
                <span className="text-content-tiny sm:text-content-small text-slate-600 ml-2">
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
      <div className="mt-5">
        <TrustedByMarquee title="Trusted by developers at" logos={clientLogos} />
      </div>
    </Section>
  )
}

export default Stats
