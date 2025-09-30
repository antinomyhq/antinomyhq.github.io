import React from "react"
import {BlogPostFrontMatter} from "@docusaurus/plugin-content-blog"
import {useBlogPost} from "@docusaurus/plugin-content-blog/client"

export default function BlogPostItemCategory(): JSX.Element {
  const {frontMatter} = useBlogPost()
  const {category} = frontMatter as unknown as BlogPostFrontMatter & {category: string}

  return category ? (
    <div className="bg-tailCall-black/40 border border-tailCall-black border-solid text-white text-[12px] font-medium p-1 rounded-[4px] inline-block">
      {category.toUpperCase()}
    </div>
  ) : (
    <></>
  )
}
