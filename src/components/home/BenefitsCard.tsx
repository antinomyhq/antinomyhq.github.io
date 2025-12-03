import React from "react"
import {benefits} from "@site/src/constants"
import Link from "@docusaurus/Link"
import clsx from "clsx"

const BenefitsCard = (): React.JSX.Element => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {benefits.map((item, index) => (
          <Link
            className={clsx(
              "group  p-6 flex flex-col md:flex-row items-start cursor-pointer hover:no-underline",
              benefits.length % 2 !== 0 &&
                index === benefits.length - 1 &&
                "md:col-span-2 md:max-w-[calc(50%-20px)] md:mx-auto",
            )}
            key={item.id}
            href={item.redirection_url}
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <item.image className="w-16 h-16 text-tailCall-terminal-text-secondary group-hover:text-tailCall-terminal-green-primary object-contain transition-colors" />
            </div>
            <div className="flex-grow">
              <p className="text-title-small sm:text-title-large text-tailCall-terminal-text-primary mb-2 flex items-center justify-between font-mono">
                {item.title}
                <span className="text-tailCall-terminal-text-secondary group-hover:text-tailCall-terminal-green-primary"></span>
              </p>
              <p className="text-content-tiny sm:text-content-small text-tailCall-terminal-text-secondary font-mono">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BenefitsCard
