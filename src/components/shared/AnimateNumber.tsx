import React, {useEffect, useRef} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  locale?: string // for comma format: "en-US", "hi-IN", etc.
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  locale = "en-US", // Default locale for commas
}) => {
  const numberRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const obj = {val: 0}
    const formatter = new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })

    let tween: gsap.core.Tween | null = null

    const trigger = ScrollTrigger.create({
      trigger: numberRef.current,
      start: "top 90%", // animate when top of element hits 90% of viewport
      onEnter: () => {
        tween = gsap.to(obj, {
          val: end,
          duration,
          ease: "power3.out",
          onUpdate: () => {
            if (numberRef.current) {
              numberRef.current.textContent = `${prefix}${formatter.format(obj.val)}${suffix}`
            }
          },
        })
      },
    })

    return () => {
      if (tween) tween.kill()
      trigger.kill()
    }
  }, [end, duration, prefix, suffix, decimals, locale])

  return <span ref={numberRef}>0</span>
}

export default AnimatedCounter
