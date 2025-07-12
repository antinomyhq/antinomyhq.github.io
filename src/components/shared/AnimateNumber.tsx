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

    const tween = gsap.to(obj, {
      val: end,
      duration,
      ease: "power3.out",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = `${prefix}${formatter.format(obj.val)}${suffix}`
        }
      },
    })

    return () => {
      tween.kill()
    }
  }, [end, duration, prefix, suffix, decimals, locale])

  return <span ref={numberRef}>0</span>
}

export default AnimatedCounter
