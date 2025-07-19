import React, {type ComponentProps, type ReactElement} from "react"
import Details from "@theme/Details"
import type {Props} from "@theme/MDXComponents/Details"

export default function MDXDetails(props: Props): JSX.Element {
  const items = React.Children.toArray(props.children)
  // Split summary item from the rest to pass it as a separate prop to the
  // Details theme component
  const summary = items.find(
    (item): item is ReactElement<ComponentProps<"summary">> => React.isValidElement(item) && item.type === "summary",
  )
  const children = <>{items.filter((item) => item !== summary)}</>

  return (
    <Details
      className="text-tailCall-light-100 font-kanit bg-tailCall-border-dark-900 !rounded-xl"
      {...props}
      summary={summary}
    >
      {children}
    </Details>
  )
}
