import React, {type ComponentProps} from "react"
import Head from "@docusaurus/Head"
import MDXCode from "@theme/MDXComponents/Code"
import MDXA from "@theme/MDXComponents/A"
import MDXPre from "@theme/MDXComponents/Pre"
import MDXDetails from "@theme/MDXComponents/Details"
import MDXHeading from "@theme/MDXComponents/Heading"
import MDXUl from "@theme/MDXComponents/Ul"
import MDXLi from "@theme/MDXComponents/Li"
import MDXImg from "@theme/MDXComponents/Img"
import Admonition from "@theme/Admonition"
import Mermaid from "@theme/Mermaid"

import type {MDXComponentsObject} from "@theme/MDXComponents"

const CustomTh = (props: ComponentProps<"th">) => (
  <th
    className="px-4 py-4 text-left !text-tailCall-darkMode---neutral-200 text-sm font-normal border-gray-600 first:rounded-tl-xl last:rounded-tr-xl !border !border-b !border-solid border-b-tailCall-darkMode---neutral-300 dark:border-b-tailCall-darkMode---neutral-700"
    {...props}
  />
)

const CustomTd = (props: ComponentProps<"td">) => (
  <td
    className="px-4 py-4 text-sm text-tailCall-lightMode---neutral-600 dark:text-gray-300 border-b border-gray-700 border border-solid border-b-tailCall-darkMode---neutral-300 dark:border-b-[#262626] bg-tailCall-darkMode---neutral-100"
    {...props}
  />
)

const MDXComponents: MDXComponentsObject = {
  Head,
  details: MDXDetails, // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: MDXDetails,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  ul: MDXUl,
  li: MDXLi,
  img: MDXImg,
  h1: (props: ComponentProps<"h1">) => (
    <MDXHeading
      className="text-[36px] font-medium !mb-2 text-tailCall-lightMode---neutral-900 dark:text-tailCall-darkMode---neutral-50"
      as="h1"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <MDXHeading
      className="text-[28px] font-medium !mb-0 !mt-12 !pt-12 border-t border-t-solid border-t-[#dbdbdb] dark:border-t-[#2B2B2B] text-tailCall-lightMode---neutral-900 dark:text-tailCall-darkMode---neutral-50"
      as="h2"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <MDXHeading
      className="text-[24px] font-medium !mb-0 !mt-9 text-tailCall-lightMode---neutral-900 dark:text-tailCall-darkMode---neutral-50"
      as="h3"
      {...props}
    />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <MDXHeading
      className="text-[20px] font-medium !mb-0 !mt-9 text-tailCall-lightMode---neutral-900 dark:text-tailCall-darkMode---neutral-50"
      as="h4"
      {...props}
    />
  ),
  h5: (props: ComponentProps<"h5">) => (
    <MDXHeading
      className="text-[16px] font-medium !mb-0 !mt-9 text-tailCall-lightMode---neutral-900 dark:text-tailCall-darkMode---neutral-50"
      as="h5"
      {...props}
    />
  ),
  h6: (props: ComponentProps<"h6">) => (
    <MDXHeading
      className="text-[14px] font-medium !mb-0 !mt-9 text-tailCall-lightMode---neutral-900 dark:text-tailCall-darkMode---neutral-50"
      as="h6"
      {...props}
    />
  ),
  admonition: Admonition,
  mermaid: Mermaid,
  p: (props: ComponentProps<"p">) => (
    <p
      className="text-[18px] font-light text-tailCall-lightMode---neutral-500 dark:text-tailCall-darkMode---neutral-400 font-kanit !mb-0"
      {...props}
    />
  ),
  th: CustomTh,
  td: CustomTd,
}

export default MDXComponents
