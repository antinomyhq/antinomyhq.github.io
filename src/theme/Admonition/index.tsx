import React from "react"
import Admonition from "@theme-original/Admonition"
import type AdmonitionType from "@theme-original/Admonition"
import type {WrapperProps} from "@docusaurus/types"

type Props = WrapperProps<typeof AdmonitionType>

export default function AdmonitionWrapper(props: Props): JSX.Element {
  return (
    <div className="text-tailCall-lightMode---neutral-700 dark:text-tailCall-darkMode---neutral-200">
      <Admonition {...props} />
    </div>
  )
}
