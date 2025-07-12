import React from "react"
import Marquee from "react-fast-marquee"
import GreaterThanUnderscoreIcon from "@site/static/icons/basic/gt-undescore-gray.svg"

interface LogoItem {
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>> | string
  name: string
  link?: string
}

interface TrustedByMarqueeProps {
  title?: string
  logos: LogoItem[]
  onClick?: () => void
  titleClassName?: string
  desktopClassName?: string
  mobileClassName?: string
  isHorizontal?: boolean
}

const LogoRenderer: React.FC<{logo: LogoItem["logo"]; alt: string}> = ({logo, alt}) => {
  if (typeof logo === "string") {
    return (
      <img
        src={logo}
        alt={alt}
        className="max-h-7 max-w-[110px] object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    )
  }

  const LogoComponent = logo
  return (
    <LogoComponent className="max-h-7 max-w-[110px] object-contain opacity-70 hover:opacity-100 transition-opacity" />
  )
}

const TrustedByMarquee: React.FC<TrustedByMarqueeProps> = ({
  title,
  logos,
  onClick,
  titleClassName = "text-content-small font-bold sm:text-title-tiny lg:text-title-small text-tailCall-light-600 text-center space-x-1",
  desktopClassName = "hidden sm:flex items-center px-8 mt-SPACE_10 overflow-hidden",
  mobileClassName = "sm:hidden flex items-center justify-around flex-wrap mt-SPACE_06 space-y-SPACE_02",
  isHorizontal = false,
}) => {
  const handleClick = () => onClick?.()

  const renderLogo = ({logo, name, link}: LogoItem) => {
    const content = <LogoRenderer logo={logo} alt={name} />

    return (
      <div key={name} className="h-12 flex items-center justify-center px-8">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    )
  }

  if (isHorizontal) {
    return (
      <div className="flex items-center gap-5">
        {title && (
          <span className="hidden lg:block min-w-[200px] font-kanit text-tailCall-lightMode---neutral-500 dark:text-white text-title-small font-normal mt-8">
            {title}
          </span>
        )}
        <Marquee autoFill>
          <div className="flex items-center px-8 mt-SPACE_10 overflow-hidden space-x-5 sm:space-x-20">
            {logos.map(renderLogo)}
          </div>
        </Marquee>
      </div>
    )
  }

  return (
    <section className={`px-10 md:px-0 ${onClick ? "cursor-pointer" : ""}`} onClick={handleClick}>
      {title && (
        <div className={titleClassName}>
          <GreaterThanUnderscoreIcon className="h-4 w-6" />
          <span>{title}</span>
        </div>
      )}
      <Marquee autoFill>
        <div className={desktopClassName}>{logos.map(renderLogo)}</div>
      </Marquee>
      <div className={mobileClassName}>{logos.map(renderLogo)}</div>
    </section>
  )
}

export default TrustedByMarquee
