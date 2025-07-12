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
      "py-8 px-10 rounded-xl text-tailCall-lightMode---neutral-600 dark:text-white dark:bg-tailCall-border-dark-1000 bg-tailCall-darkMode---neutral-300",
  }
  return <div className={`${CardVariant[variant]}`}>{children}</div>
}

export default Card
