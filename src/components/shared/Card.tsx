import React from "react"

type variant = "thin" | "default"

type CardProps = {
  children: React.ReactNode
  variant?: variant
}

const Card = ({children, variant = "default"}: CardProps): JSX.Element => {
  const CardVariant = {
    thin: "rounded-[40px] max-w-[600px] flex flex-col gap-4 max-h-[50vh] overflow-scroll",
    default: "",
  }
  return <div className={`${CardVariant[variant]}`}>{children}</div>
}

export default Card
