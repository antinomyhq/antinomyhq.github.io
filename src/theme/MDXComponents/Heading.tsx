import React from "react"
import Heading from "@theme/Heading"
import type {Props} from "@theme/MDXComponents/Heading"

export default function MDXHeading(props: Props): JSX.Element {
  return (
    <Heading
      className="text-tailCall-lightMode---neutral-700 dark:text-tailCall-darkMode---neutral-400 font-kanit"
      {...props}
    />
  )
}
