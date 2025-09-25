import {Info, Lightbulb, TriangleAlert} from "lucide-react"
import React from "react"

type variant = "thin" | "default" | "docsCard"

type CardProps = {
  children: React.ReactNode
  variant?: variant
}

const Card = ({children, variant = "default"}: CardProps): JSX.Element => {
  const CardVariant = {
    thin: "rounded-[40px] max-w-[600px] flex flex-col gap-4 max-h-[50vh] overflow-scroll",
    default: "",
    docsCard:
      "py-8 px-10 rounded-[12px] !font-[275] text-tailCall-lightMode---neutral-600 dark:text-white dark:bg-[#181818] bg-tailCall-darkMode---neutral-300",
  }
  return <div className={`text-justify text-title-small font-normal h-[100%] ${CardVariant[variant]}`}>{children}</div>
}

export default Card
