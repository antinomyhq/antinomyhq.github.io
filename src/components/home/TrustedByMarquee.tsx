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
}

const TrustedByMarquee: React.FC<TrustedByMarqueeProps> = ({
  title = "Used By",
  logos,
  onClick,
  titleClassName = "text-content-small font-bold sm:text-title-tiny lg:text-title-small text-tailCall-light-600 text-center space-x-1",
  desktopClassName = "hidden sm:flex items-center px-8 mt-SPACE_10 overflow-hidden",
  mobileClassName = "sm:hidden flex items-center justify-around flex-wrap mt-SPACE_06 space-y-SPACE_02",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const renderLogo = (partner: LogoItem) => {
    const LogoComponent = partner.logo

    return (
      <div key={partner.name} className="h-12 flex items-center justify-center px-8">
        {partner.link ? (
          <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-full"
          >
            {typeof LogoComponent === "string" ? (
              <img
                src={LogoComponent}
                alt={partner.name}
                className="max-h-7 max-w-[110px] object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ) : (
              <LogoComponent className="max-h-7 max-w-[110px] object-contain opacity-70 hover:opacity-100 transition-opacity" />
            )}
          </a>
        ) : (
          <>
            {typeof LogoComponent === "string" ? (
              <img src={LogoComponent} alt={partner.name} className="max-h-7 max-w-[110px] object-contain opacity-70" />
            ) : (
              <LogoComponent className="max-h-7 max-w-[110px] object-contain opacity-70" />
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <section className={`px-10 md:px-0 ${onClick ? "cursor-pointer" : ""}`} onClick={handleClick}>
      <div className={titleClassName}>
        <GreaterThanUnderscoreIcon className="h-4 w-6" />
        <span>{title}</span>
      </div>

      <Marquee autoFill>
        <div className={desktopClassName}>{logos.map(renderLogo)}</div>
      </Marquee>

      <div className={mobileClassName}>{logos.map(renderLogo)}</div>
    </section>
  )
}

export default TrustedByMarquee
