import React from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import {BlogAuthor} from "@site/src/theme/BlogAuthor"
import {Author} from "@docusaurus/plugin-content-blog"

export interface BlogListItemProps {
  date: string
  title: string
  description: string
  authors: Author[]
  permalink: string
}

const BlogListItem: React.FC<BlogListItemProps> = ({date, title, description, authors, permalink}) => {
  return (
    <Link to={permalink} className="group flex flex-col overflow-hidden !text-black !no-underline">
      <div className="flex p-[1px] z-0 group-hover:bg-custom-dark-gradient-blog-border bg-gradient-to-t from-[#505050] to-[#a9a9a9] rounded-xl">
        <div className="relative flex flex-col flex-1 p-3 md:py-12 bg-white dark:bg-black md:px-6 gap-2 md:gap-3 rounded-xl">
          <span className="hidden font-kanit md:flex text-content-mini text-tailCall-lightMode---neutral-500 dark:text-white">
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </span>
          <div className="flex flex-col flex-1 gap-1 md:gap-2">
            <span
              className={clsx(
                "text-title-small font-kanit line-clamp-2 text-tailCall-lightMode---neutral-800 dark:text-white",
              )}
            >
              {title}
            </span>
            <span className="flex-1 font-kanit text-content-tiny md:text-content-small line-clamp-1 md:line-clamp-3 text-tailCall-lightMode---neutral-700 dark:text-white opacity-50 blog-post-content-desc">
              {description}
            </span>
          </div>
          {authors[0] && (
            <BlogAuthor
              author={authors[0]}
              containerClassName="mt-auto"
              textClassName="text-tailCall-lightMode---neutral-400 !font-normal font-kanit dark:text-white"
            />
          )}
          <div className="absolute bottom-0 left-0 group-hover:bg-radial-bottom-teal group-hover:dark:bg-custom-radial z-50 h-32 w-full"></div>
        </div>
      </div>
    </Link>
  )
}

export default BlogListItem
