import React from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"

export interface NextStepItem {
  logo: React.ReactNode
  title: string
  subtitle: string
  link: string
}

export interface NextStepsProps {
  items: [NextStepItem, NextStepItem, NextStepItem]
  className?: string
}

const NextSteps: React.FC<NextStepsProps> = ({items, className}) => {
  return (
    <div className={clsx("grid grid-cols-1 md:grid-cols-3 gap-4 my-8", className)}>
      {items.map((item, idx) => (
        <Link key={idx} to={item.link} className="flex flex-col overflow-hidden !text-black !no-underline h-full">
          <div className="flex flex-col flex-1 p-6 gap-2 min-h-44 border border-dashed border-tailCall-border-light-600 bg-transparent hover:border-tailCall-border-dark-100 transition-colors">
            <div className="mb-2 flex items-center text-tailCall-light-700">{item.logo}</div>
            <div className="flex flex-col flex-1 gap-1">
              <span className="text-title-small font-bold line-clamp-2">{item.title}</span>
              <span className="text-content-small text-tailCall-light-800">{item.subtitle}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NextSteps
