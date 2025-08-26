import React from "react"
import {benefits} from "@site/src/constants"
import {ArrowRight} from "lucide-react"
import Link from "@docusaurus/Link"
import clsx from "clsx"

const BenefitsCard = (): JSX.Element => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {benefits.map((item, index) => (
          <Link
            className={clsx(
              "group  p-6 flex flex-col md:flex-row items-start hover:border-tailCall-yellow cursor-pointer hover:no-underline",
              benefits.length % 2 !== 0 &&
                index === benefits.length - 1 &&
                "md:col-span-2 md:max-w-[calc(50%-20px)] md:mx-auto",
            )}
            key={item.id}
            href={item.redirection_url}
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <item.image className="w-16 h-16 text-gray-400 group-hover:text-tailCall-yellow object-contain" />
            </div>
            <div className="flex-grow">
              <p className="text-title-small sm:text-title-large text-tailCall-white mb-2 flex items-center justify-between">
                {item.title}
                <span className="text-gray-400 group-hover:text-white"></span>
              </p>
              <p className="text-content-tiny sm:text-content-small text-tailCall-light-600">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BenefitsCard
