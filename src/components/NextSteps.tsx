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
    <div
      className={clsx("grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-8 md:gap-4 my-8", className)}
    >
      {items.map((item, idx) => (
        <Link key={idx} to={item.link} className="flex flex-col overflow-visible !no-underline h-full">
          <div className="relative mt-5 bg-card-border-gradient-nextStep-light dark:bg-card-border-gradient-nextStep rounded-[13px] min-w-auto 2xl:min-w-72 h-full p-[1px]">
            <div className="flex flex-col flex-1 p-6 gap-2 bg-white dark:bg-tailCall-dark-800 rounded-xl h-full hover:border-tailCall-border-dark-100 transition-colors">
              <div className="absolute -top-10 mb-2 rounded-full bg-card-border-gradient-nextStep-light dark:bg-card-border-gradient-nextStep p-[1px] flex items-center justify-center">
                <div className=" flex items-center justify-center text-tailCall-lightMode---neutral-700 dark:text-tailCall-light-800 bg-[#f1f1f1] dark:bg-black rounded-full p-5">
                  {item.logo}
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2 mt-6">
                <span className="text-title-small font-bold line-clamp-2 text-tailCall-lightMode---neutral-600 dark:text-tailCall-darkMode---neutral-200">
                  {item.title}
                </span>
                <ul>
                  <li className="text-content-small text-tailCall-lightMode---neutral-700 dark:text-tailCall-light-800">
                    {item.subtitle}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NextSteps
