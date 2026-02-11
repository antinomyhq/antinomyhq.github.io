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
}

const TrustedByMarquee: React.FC<TrustedByMarqueeProps> = ({
  title = "Used By",
  logos,
  onClick,
  titleClassName = "text-content-small font-bold sm:text-title-tiny lg:text-title-small text-tailCall-light-600 text-left space-x-1",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const renderLogo = (partner: LogoItem) => {
    const LogoComponent = partner.logo

    return (
      <div key={partner.name} className="h-8 sm:h-10 md:h-12 flex items-center justify-center px-3 sm:px-6 md:px-8">
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
                className="max-h-4 sm:max-h-5 md:max-h-7 max-w-[60px] sm:max-w-[80px] md:max-w-[110px] object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ) : (
              <LogoComponent className="max-h-4 sm:max-h-5 md:max-h-7 max-w-[60px] sm:max-w-[80px] md:max-w-[110px] object-contain opacity-70 hover:opacity-100 transition-opacity" />
            )}
          </a>
        ) : (
          <>
            {typeof LogoComponent === "string" ? (
              <img
                src={LogoComponent}
                alt={partner.name}
                className="max-h-4 sm:max-h-5 md:max-h-7 max-w-[60px] sm:max-w-[80px] md:max-w-[110px] object-contain opacity-70"
              />
            ) : (
              <LogoComponent className="max-h-4 sm:max-h-5 md:max-h-7 max-w-[60px] sm:max-w-[80px] md:max-w-[110px] object-contain opacity-70" />
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <section className={`px-4 sm:px-10 md:px-0 ${onClick ? "cursor-pointer" : ""}`} onClick={handleClick}>
      <div className={titleClassName}>
        <GreaterThanUnderscoreIcon className="h-3 sm:h-4 w-5 sm:w-6" />
        <span>{title}</span>
      </div>

      <Marquee autoFill speed={30} className="mt-4 sm:mt-6 md:mt-SPACE_10">
        <div className="flex items-center overflow-hidden">{logos.map(renderLogo)}</div>
      </Marquee>
    </section>
  )
}

export default TrustedByMarquee
