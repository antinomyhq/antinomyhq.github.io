import React from "react"
import {useDoc} from "@docusaurus/plugin-content-docs/client"
import DocPaginator from "@theme/DocPaginator"

/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */
export default function DocItemPaginator(): JSX.Element {
  const {metadata} = useDoc()
  return (
    <div className="bg-transparent md:bg-white md:dark:bg-tailCall-darkMode---neutral-900 rounded-[12px] px-3 py-6 mt-5">
      <DocPaginator previous={metadata.previous} next={metadata.next} />
    </div>
  )
}
