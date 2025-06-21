import React from "react"

type variant = "thin" | "large"

type CardProps = {
  children: React.ReactNode
  variant?: variant
}

const Card = ({children, variant = "large"}: CardProps): JSX.Element => {
  const CardVariant = {
    thin: "rounded-[40px] max-w-[600px] flex flex-col gap-4 max-h-[50vh] overflow-scroll",
    large:
      "px-8 py-9 rounded-[56px] min-w-[340px] max-w-[380px] border-[11px] border-[#181D27] border-solid bg-black shadow-[0px_0px_4px_0px_#30EDE6]",
  }
  return <div className={`${CardVariant[variant]}`}>{children}</div>
}

export default Card
