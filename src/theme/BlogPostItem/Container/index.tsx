import React from "react"
import type {Props} from "@theme/BlogPostItem/Container"

export default function BlogPostItemContainer({children, className}: Props): JSX.Element {
  return <article className={`bg-[#f1f1f1] dark:bg-black ${className}`}>{children}</article>
}
