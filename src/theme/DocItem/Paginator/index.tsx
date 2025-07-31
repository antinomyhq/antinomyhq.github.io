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
    <div className="bg-transparent px-3 py-6 mt-5 border-t border-t-solid border-tailCall-lightMode---neutral-300 dark:border-tailCall-darkMode---neutral-700">
      <DocPaginator
        className={!metadata.previous || !metadata.next ? "pagination-nav-single" : ""}
        previous={metadata.previous}
        next={metadata.next}
      />
    </div>
  )
}
