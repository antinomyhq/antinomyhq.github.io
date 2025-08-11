import React from "react"
import Card from "../../shared/Card"

type UserFeedbackCardProps = {
  title: string
  imageUrl: string
  author: string
  designation: string
}

const containerClass =
  "px-8 py-8 rounded-xl h-full w-full md:w-[380px] border-[11px] border-tailCall-lightMode---neutral-50 dark:border-[#181D27] border-solid bg-transparent shadow-[0px_0px_4px_0px_#088C8C] dark:shadow-[0px_0px_4px_0px_#30EDE6] hover:cursor-pointer hover:bg-custom-radial-light hover:dark:bg-custom-radial transition-all duration-100 ease-in overflow-hidden"

const innerWrapperClass = "flex__column justify-between h-full gap-3"
const topContentClass = "flex__column gap-3"
const titleClass =
  "text-tailCall-darkMode---neutral-700 dark:text-white text-title-small font-light break-words text-left"
const authorClass = "text-tailCall-darkMode---neutral-500 dark:text-white dark:opacity-50 text-title-tiny font-normal"

const UserFeedbackCard = ({title, imageUrl, author, designation}: UserFeedbackCardProps) => (
  <Card key={title}>
    <div className={containerClass}>
      <div className={innerWrapperClass}>
        <div className={topContentClass}>
          <img src={imageUrl} alt="Feedback" height={80} width={80} className="grayscale" />
          <span className={titleClass}>{title}</span>
        </div>
        <div className="flex flex-col">
          <span className={authorClass}>{author}</span>
          <span className={`${authorClass} text-left`}>{designation}</span>
        </div>
      </div>
    </div>
  </Card>
)

export default UserFeedbackCard
