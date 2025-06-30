import React from "react"
import Avatar from "./Avatar"

type TechCardProps = {
  title: string
  avatars: string[]
  description: string[]
}

const TechCard = (props: TechCardProps): JSX.Element => {
  const {title, description, avatars} = props
  return (
    <div className="odd:rotate-2 -rotate-2 rounded-2xl bg-[radial-gradient(37.73%_37.61%_at_50.74%_103.75%,_rgba(48,237,230,0.5)_0%,_rgba(21,20,23,0.5)_100%)]">
      <div className="px-8 py-5 flex items-center justify-between bg-tailCall-dark-800 rounded-t-2xl">
        <span className="text-white font-kanit text-title-small xl:text-[26px] -tracking-normal font-normal opacity-70">
          {title}
        </span>
        <ul className="flex items-center list-none  m-0">
          {avatars.map((avatars) => {
            return <Avatar avatarUrl={avatars} key={avatars} />
          })}
        </ul>
      </div>
      <ul className="px-8 py-4 flex flex-col list-none text-title-tiny font-normal gap-3 text-white opacity-80">
        {description.map((desc) => {
          return <li key={desc}>{desc}</li>
        })}
      </ul>
    </div>
  )
}

export default TechCard
