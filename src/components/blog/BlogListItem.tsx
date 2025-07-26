import React from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import {BlogAuthor} from "@site/src/theme/BlogAuthor"
import {Author} from "@docusaurus/plugin-content-blog"
import type {TagMetadata} from "@docusaurus/utils"
import Chip from "../shared/Chip"
export interface BlogListItemProps {
  date: string
  title: string
  description: string
  authors: Author[]
  permalink: string
  tags: TagMetadata[]
  bgIndex: number
}

const gradients = [
  "linear-gradient(180deg, #6E6E6E 0%, #3B3B3B 100%)",
  "linear-gradient(102deg, #E0AFAF 0%, #996969 108.06%)",
  "linear-gradient(180deg, #85C9C8 0%, #5E9D9B 100%)",
  "linear-gradient(180deg, #A3B087 0%, #3B3B3B 100%)",
  "linear-gradient(102deg, #94C4FC 0%, #42628C 108.06%)",
  "linear-gradient(180deg, #C985BD 0%, #D37C5C 100%)",
]

const BlogListItem: React.FC<BlogListItemProps> = ({date, title, description, permalink, tags, bgIndex, authors}) => {
  return (
    <Link to={permalink} className="group flex flex-col overflow-hidden !text-black !no-underline">
      <div className="flex h-full p-[1px] z-0 bg-custom-blog-card-light-border group-hover:bg-custom-blog-card-light-border-active dark:bg-card-border-gradient-nextStep group-hover:dark:bg-custom-blog-card-dark-border-active rounded-[13px]">
        <div className="relative max-w-fill flex flex-col flex-1 px-1 py-1 border dark:border-none border-solid border-tailCall-darkMode---neutral-300 bg-[#f1f1f1] dark:bg-black gap-2 md:gap-3 rounded-[12px]">
          <div
            className={`w-full relative rounded-lg pt-5 pl-5 pb-16 overflow-hidden`}
            style={{background: gradients[bgIndex]}}
          >
            <div className="flex flex-col font-kanit text-white text-content-tiny md:text-content-small lg:text-title-tiny xl:text-title-small !font-normal">
              <span>
                {new Date(date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </span>
              <span>7 min read</span>
            </div>
            <img src="/icons/basic/forgecode-logo.svg" alt="ForgeCode" className="absolute right-0 top-0" />
          </div>
          <div className={`flex flex-col px-3 w-full ${tags ? "mt-3" : "mt-0"}`}>
            <div className="flex gap-3 overflow-x-auto max-w-full whitespace-nowrap no-scrollbar">
              {tags?.map(({label}) => <Chip label={label} key={label} />)}
            </div>
            <span
              className={`${tags ? "mt-5" : "mt-2"} font-kanit text-tailCall-darkMode---neutral-800 dark:text-tailCall-darkMode---neutral-300 text-title-tiny md:text-title-small lg:text-title-medium !font-normal line-clamp-2`}
            >
              {title}
            </span>
            <p className="mt-2 font-kanit text-tailCall-darkMode---neutral-600 dark:text-tailCall-darkMode---neutral-500 text-content-small md:text-title-tiny lg:text-title-small xl:leading-[30px] !font-light line-clamp-3">
              {description}
            </p>
            {authors[0] && (
              <BlogAuthor
                author={authors[0]}
                containerClassName="mt-auto"
                textClassName="text-tailCall-lightMode---neutral-800 !font-normal font-kanit dark:text-white"
              />
            )}
          </div>
          <div className="absolute bottom-0 left-0 group-hover:bg-custom-radial-light group-hover:dark:bg-custom-radial z-50 h-[15rem] w-full"></div>
        </div>
      </div>
    </Link>
  )
}

export default BlogListItem
