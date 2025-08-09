import React from "react"
import Avatar from "./Avatar"

type TechCardProps = {
  title: string
  avatars: string[]
  description: string[]
  selected?: boolean
}

const TechCard = (props: TechCardProps): JSX.Element => {
  const {title, description, avatars, selected} = props
  return (
    <div
      className={
        `hover:cursor-pointer transition-transform duration-500 rounded-md lg:rounded-xl bg-tailCall-border-light-300 dark:bg-transparent ` +
        `${selected ? "rotate-0 bg-tailCall-border-light-300 dark:bg-transparent" : "odd:rotate-2 even:-rotate-2 dark:bg-tailCall-dark-1900"} ` +
        `hover:rotate-0 hover:bg-custom-radial-light hover:dark:bg-[radial-gradient(37.73%_37.61%_at_50.74%_103.75%,rgba(48,237,230,0.8)_0%,#18171A_100%)]`
      }
    >
      <div
        className={
          `bg-tailCall-darkMode---neutral-300 relative px-4 md:px-8 py-5 flex items-center justify-between rounded-t-md lg:rounded-t-2xl transition-all duration-300 ` +
          `${selected ? "bg-tailCall-darkMode---neutral-500 dark:bg-tailCall-lightMode---primary-1200 text-white opacity-100" : "bg-tailCall-darkMode---neutral-300 dark:bg-tailCall-dark-1200"}`
        }
      >
        <span
          className={
            `max-w-48 md:max-w-none font-kanit text-content-small xl:text-[26px] -tracking-normal font-normal transition-all duration-300 ` +
            `${selected ? "text-white font-bold drop-shadow" : "text-tailCall-lightMode---primary-1200 dark:text-white opacity-70"}`
          }
        >
          {title}
        </span>
        <ul className="absolute right-5 -space-x-4 flex items-center list-none m-0">
          {avatars.map((avatars) => {
            return <Avatar avatarUrl={avatars} key={avatars} />
          })}
        </ul>
      </div>
      <ul
        className={
          `px-8 py-4 flex flex-col font-space list-none text-content-tiny md:text-title-tiny !font-normal gap-3 opacity-80 rounded-b-md lg:rounded-b-xl ` +
          `${selected ? "bg-tailCall-lightMode---neutral-200 dark:bg-tailCall-dark-400" : "bg-tailCall-lightMode---neutral-200 dark:bg-tailCall-dark-1900"} text-tailCall-light-1000 dark:text-tailCall-light-800`
        }
      >
        {description.map((desc) => {
          return <li key={desc}>{desc}</li>
        })}
      </ul>
    </div>
  )
}

export default TechCard
