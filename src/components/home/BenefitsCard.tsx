import React from "react"
import {benefits} from "@site/src/constants"
import Link from "@docusaurus/Link"
import clsx from "clsx"

const BenefitsCard: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full">
        {benefits.map((item, index) => (
          <Link
            className={clsx(
              "group p-4 lg:p-6 flex flex-col lg:flex-row items-start cursor-pointer hover:no-underline",
              benefits.length % 2 !== 0 &&
                index === benefits.length - 1 &&
                "lg:col-span-2 lg:max-w-[calc(50%-20px)] lg:mx-auto",
            )}
            key={item.id}
            href={item.redirection_url}
          >
            <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-6">
              <item.image className="w-12 h-12 lg:w-16 lg:h-16 text-tailCall-terminal-text-secondary group-hover:text-tailCall-terminal-green-primary object-contain transition-colors" />
            </div>
            <div className="flex-grow min-w-0 w-full">
              <p className="text-lg lg:text-title-large text-tailCall-terminal-text-primary mb-2 flex items-center justify-between font-mono break-words">
                {item.title}
                <span className="text-tailCall-terminal-text-secondary group-hover:text-tailCall-terminal-green-primary"></span>
              </p>
              <p className="text-sm lg:text-content-small text-tailCall-terminal-text-secondary font-mono break-words">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BenefitsCard
