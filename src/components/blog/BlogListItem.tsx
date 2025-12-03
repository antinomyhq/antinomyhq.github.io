import React from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import {BlogAuthor} from "@site/src/theme/BlogAuthor"
import {Author} from "@docusaurus/plugin-content-blog"

import {useHistory} from "@docusaurus/router"
import {useReadingTimePluralForBlogs} from "@site/src/utils/hooks/useReadingTime"
export interface BlogListItemProps {
  date: string
  title: string
  description: string
  authors: Author[]
  permalink: string
  readingTime?: number
}

const BlogListItem: React.FC<BlogListItemProps> = ({date, title, description, authors, permalink}) => {
  return (
    <Link to={permalink} className="flex flex-col overflow-hidden !text-terminal-text-primary !no-underline hover:!text-terminal-green-primary transition-colors">
      <div className="flex flex-col flex-1 p-3 md:py-12 md:px-6 gap-2 md:gap-3 dash bg-terminal-bg-secondary border border-terminal-border hover:border-terminal-green-primary transition-all duration-300">
        <span className="hidden md:flex text-content-mini text-terminal-text-muted font-mono">
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          })}
        </span>
        <div className="flex flex-col flex-1 gap-1 md:gap-2">
          <span className={clsx("text-title-small line-clamp-2 text-terminal-text-primary font-mono")}>{title}</span>
          <span className="flex-1 text-content-tiny md:text-content-small line-clamp-1 md:line-clamp-3 text-terminal-text-secondary blog-post-content-desc font-mono">
            {description}
          </span>
        </div>
        {authors[0] && <BlogAuthor author={authors[0]} containerClassName="mt-auto" />}
      </div>
    </Link>
  )
}

export default BlogListItem
