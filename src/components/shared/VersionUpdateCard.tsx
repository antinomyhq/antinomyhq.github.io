import React from "react"
import LinkButton from "./LinkButton"
import {pageLinks} from "@site/src/constants/routes"
import {Theme} from "@site/src/constants"

const VersionUpdateCard = () => {
  return (
    <div className="flex flex-col sm:flex-row py-8 px-6 sm:px-11 rounded-xl bg-white dark:bg-tailCall-dark-600 justify-between items-start sm:items-center gap-4 version-update-card">
      <div className="flex flex-col gap-1">
        <span className="text-title-medium sm:text-title-large text-black dark:text-white ">
          Update to latest version !!
        </span>
        <span className="text-content-small text-tailCall-lightMode---neutral-700 dark:text-white">
          Get the instructions from the docs
        </span>
      </div>
      <LinkButton title="Get Started" titleClassName="text-center" href={pageLinks.docs} theme={Theme.Tailcall} />
    </div>
  )
}

export default VersionUpdateCard
