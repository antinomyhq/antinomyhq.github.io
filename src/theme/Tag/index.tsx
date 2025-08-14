import React, {type ReactNode} from "react"
import type {Props} from "@theme/Tag"

import {CustomLink} from "@site/src/components/shared"

export default function Tag({permalink, label, count, description}: Props): ReactNode {
  return (
    <div className="relative ml-3 group cursor-pointer pl-0 p-[1px] bg-tailCall-lightMode---neutral-1200 hover:bg-[linear-gradient(90deg,rgba(102,_102,_102,_1)_0%,_rgba(44,_218,_212,_1)_62%)] rounded-tl-none rounded-bl-none rounded">
      <div className="h-[32px] w-[32px] bg-transparent border border-solid border-r-transparent border-b-transparent border-tailCall-lightMode---neutral-1200 absolute -rotate-45 -left-[15px] top-[6px]"></div>
      <div className="flex items-center gap-2 px-4 py-2 bg-tailCall-light-1200 dark:bg-black rounded rounded-tl-none rounded-bl-none pl-0">
        <img src="/icons/basic/tag-dot.svg" alt="tag-dot" />
        <CustomLink className="font-normal text-title-small !no-underline z-10" href={permalink}>
          {label}
        </CustomLink>
        <div className="w-[1px] h-[25px] bg-tailCall-lightMode---neutral-1200 rounded-xl z-10"></div>
        {count && (
          <span className="text-black dark:text-white font-normal text-title-small z-10">
            {count < 10 ? `0${count}` : count}
          </span>
        )}
      </div>
    </div>
  )
}
