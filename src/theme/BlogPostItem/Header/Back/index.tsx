import Link from "@docusaurus/Link"
import {ArrowLeft} from "lucide-react"
import React from "react"

export default function BlogBackButton(): JSX.Element {
  return (
    <Link
      to="/blog"
      className="flex items-center gap-2 mt-5 mb-8 cursor-pointer !no-underline text-tailCall-lightMode---neutral-500 dark:text-tailCall-darkMode---neutral-500"
      onClick={() => {}}
    >
      <ArrowLeft
        size={24}
        className="text-tailCall-lightMode---neutral-500 dark:text-tailCall-darkMode---neutral-500"
      />
      <span className="text-content-small text-tailCall-lightMode---neutral-500 dark:text-tailCall-darkMode---neutral-500">
        Back to Blogs
      </span>
    </Link>
  )
}
