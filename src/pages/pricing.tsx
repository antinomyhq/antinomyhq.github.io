import React, {useEffect, useState, useCallback, useMemo} from "react"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import Section from "../components/shared/Section"
import {Theme} from "@site/src/constants"
import {analyticsHandler} from "@site/src/utils"
import {CircleCheck, Minus, Plus} from "lucide-react"
import NewLinkButton from "../components/shared/NewLinkButton"
import clsx from "clsx"
import {FAQS, tiers} from "../constants/index"
import {useLocation} from "@docusaurus/router"
import ReactGA from "react-ga4"
import SpotlightSpan from "../components/home/components/SpotlightCursor"
import AIProviderCard from "../components/shared/AIProviderCard"

// Types
interface AIProvider {
  title: string
  darkLogoUrl: string
  lightLogoUrl: string
}

interface PricingTier {
  name: string
  price: string
  period: string
  description?: string
  cta?: string
  href?: string
  popular?: boolean
  features: string[]
}

interface FAQItem {
  question: string
  answer: string
}

// Constants
const AI_PROVIDERS: AIProvider[] = [
  {title: "OpenAI", darkLogoUrl: "/images/pricing/openai-dark.svg", lightLogoUrl: "/images/pricing/openai-light.svg"},
  {
    title: "Anthropic",
    darkLogoUrl: "/images/pricing/anthropic-dark.svg",
    lightLogoUrl: "/images/pricing/anthropic-light.svg",
  },
  {title: "Google", darkLogoUrl: "/images/pricing/google-dark.svg", lightLogoUrl: "/images/pricing/google-light.svg"},
  {title: "xAI", darkLogoUrl: "/images/pricing/xai-dark.svg", lightLogoUrl: "/images/pricing/xai-light.svg"},
  {title: "Meta", darkLogoUrl: "/images/pricing/meta-dark.svg", lightLogoUrl: "/images/pricing/meta-light.svg"},
  {
    title: "Mistral",
    darkLogoUrl: "/images/pricing/mistral-dark.svg",
    lightLogoUrl: "/images/pricing/mistral-light.svg",
  },
  {
    title: "Deepseek",
    darkLogoUrl: "/images/pricing/deepseek-dark.svg",
    lightLogoUrl: "/images/pricing/deepseek-light.svg",
  },
]

// CSS Class Constants
const HERO_CONTAINER_CLASSES = "mx-auto w-full"
const HERO_SECTION_CLASSES =
  "px-8 py-16 md:px-24 lg:px-36 lg:py-24  dark:bg-black bg-tailCall-light-1200 border-b border-solid border-transparent border-b-tailCall-lightMode---neutral-300 dark:border-b-tailCall-darkMode---neutral-700"
const HERO_CONTENT_CLASSES = "flex flex-col lg:gap-0 items-start xl:items-center xl:flex-row justify-between w-full"
const HERO_TITLE_CONTAINER_CLASSES = "flex flex-col mt-2"
const HERO_TITLE_CLASSES =
  "font-bebas !font-normal text-[45px] md:text-display-small lg:text-display-medium xl:text-display-large-semi tracking-normal"
const HERO_SUBTITLE_CLASSES =
  "-mt-4 md:-mt-5 lg:-mt-2 xl:-mt-8 leading-10 md:leading-normal font-bebas !font-normal text-[45px] md:text-display-small lg:text-display-medium xl:text-display-large-semi tracking-normal"
const HERO_DESCRIPTION_CLASSES =
  "block mt-2 md:mt-0 max-w-[500px] xl:mt-20 font-kanit !font-normal lg:leading-8 xl:leading-[32px] text-[16px] md:text-title-small lg:text-[20px] xl:text-[22px] text-tailCall-darkMode---neutral-500 tracking-normal"
const PRICING_HEADER_CLASSES = "text-center mb-14"
const PRICING_TITLE_CLASSES =
  "text-title-large !font-normal md:text-content-regular mb-2 text-tailCall-lightMode---neutral-900 dark:text-white font-kanit"
const PRICING_SUBTITLE_CLASSES =
  "text-title-small-pricing !text-[22px] font-kanit !font-normal text-tailCall-darkMode---neutral-500 max-w-2xl mx-auto"
const PRICING_GRID_CLASSES =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-4 max-w-7xl mx-auto pb-12 mb-24"
const CARD_CONTAINER_CLASSES =
  "bg-gradient-315-light-inactive dark:bg-gradient-315-inactive hover:bg-gradient-315-light hover:dark:bg-gradient-315 rounded-[13px] group p-[1px] relative flex flex-col transition-all duration-700 overflow-visible hover:shadow-2xl"
const CARD_CONTENT_CLASSES = "p-6 bg-white dark:bg-tailCall-darkMode---neutral-900 rounded-[12px] h-full"
const CARD_BACKGROUND_CLASSES =
  "absolute left-0 bottom-0 w-full h-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 bg-custom-radial-light dark:bg-custom-radial"
const CARD_TITLE_CLASSES =
  "text-title-semi-large font-normal text-left text-tailCall-darkMode---neutral-600 dark:text-white mb-0 dark:group-hover:text-white"
const PRICE_CONTAINER_CLASSES = "flex items-baseline gap-2"
const PRICE_CLASSES = "text-title-text-large font-normal text-tailCall-darkMode---neutral-600 dark:text-white"
const PERIOD_CLASSES = "text-content-tiny text-tailCall-darkMode---neutral-600 dark:text-white"
const DESCRIPTION_CLASSES = "text-[13px] text-left dark:text-tailCall-darkMode---neutral-400 mb-6"
const FEATURES_SECTION_CLASSES = "border-gray-300 dark:border-gray-700 mb-4"
const FEATURES_TITLE_CLASSES =
  "text-sm font-normal text-[15px] mb-3 text-tailCall-lightMode---neutral-900 dark:text-tailCall-light-800 dark:group-hover:text-white transition-colors duration-300"
const FEATURES_LIST_CLASSES = "space-y-2"
const FEATURE_ITEM_CLASSES =
  "flex gap-2 items-start text-lg text-tailCall-darkMode---neutral-700 dark:text-tailCall-darkMode---neutral-400 dark:group-hover:text-white transition-colors duration-300 font-kanit"
const FEATURE_ICON_CLASSES =
  "dark:text-tailCall-light-800 mt-2 flex-shrink-0 dark:group-hover:text-white transition-colors duration-300"
const FEATURE_TEXT_CLASSES = "text-[16px]"
const FAQ_SECTION_CLASSES = "grid grid-cols-1 xl:grid-cols-[300px_1fr] xl:gap-32 items-start"
const FAQ_HEADER_CLASSES = "items-start mt-10"
const FAQ_TITLE_CLASSES =
  "text-title-large !font-medium md:text-content-regular text-left mb-1 text-tailCall-lightMode---neutral-900 dark:text-tailCall-white !leading-[65px]"
const FAQ_SUBTITLE_CLASSES =
  "text-content-small md:text-question-title text-tailCall-lightMode---primary-1300 !font-[275] dark:text-tailCall-border-light-300 font-kanit mt-5"
const FAQ_ITEM_CLASSES =
  "flex w-full justify-between items-center pt-8 text-left focus:outline-none bg-transparent dark:bg-black border-none cursor-pointer transition-all duration-300"
const FAQ_QUESTION_CLASSES = "text-content-small md:text-question-title transition-colors duration-300"
const FAQ_ANSWER_CLASSES = "overflow-hidden transition-all duration-300"
const FAQ_ANSWER_TEXT_CLASSES =
  "text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 py-1 font-kanit text-content-tiny md:text-[23px] leading-7 md:leading-[35px] font-[275]"
const AI_PROVIDERS_SECTION_CLASSES = "flex flex-col gap-10 xl:my-20"
const AI_PROVIDERS_HEADER_CLASSES = "flex flex-col items-center text-center xl:mt-10"
const AI_PROVIDERS_TITLE_CLASSES =
  "font-kanit text-[32px] lg:text-[37px] text-display-tiny font-normal text-tailCall-darkMode---neutral-800 dark:text-white"
const AI_PROVIDERS_SUBTITLE_CLASSES =
  "font-kanit text-[16px] lg:text-[26px] text-question-title text-tailCall-darkMode---neutral-400 font-light max-w-[50rem] text-center"
const AI_PROVIDERS_GRID_CLASSES =
  "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 max-w-5xl mx-auto xl:mb-10"

// Components
const HeroSection: React.FC = () => (
  <div className={HERO_CONTAINER_CLASSES}>
    <div className={HERO_SECTION_CLASSES}>
      <div className={HERO_CONTENT_CLASSES}>
        <div className={HERO_TITLE_CONTAINER_CLASSES}>
          <SpotlightSpan className={HERO_TITLE_CLASSES} text="start for free." showHighlighted />
          <SpotlightSpan className={HERO_SUBTITLE_CLASSES} text="scale when you're ready." showHighlighted />
        </div>
        <span className={HERO_DESCRIPTION_CLASSES}>
          No credit card required. No lock-in. <br />
          Just productivity from day one
        </span>
      </div>
    </div>
  </div>
)

const PricingHeader: React.FC = () => (
  <div className={PRICING_HEADER_CLASSES}>
    <Heading as="h1" className={PRICING_TITLE_CLASSES}>
      Simple Pricing
    </Heading>
    <p className={PRICING_SUBTITLE_CLASSES}>Start free, upgrade when you're ready. No hidden fees.</p>
  </div>
)

const PricingCard: React.FC<{tier: PricingTier}> = ({tier}) => (
  <div className={CARD_CONTAINER_CLASSES}>
    <div className={CARD_CONTENT_CLASSES}>
      <div className={clsx(CARD_BACKGROUND_CLASSES, {"!opacity-100": tier.name === "Pro"})} />
      <div className="relative z-10">
        <div className="flex flex-col flex-grow">
          <h3 className={CARD_TITLE_CLASSES}>{tier.name}</h3>
          <div>
            <div className={PRICE_CONTAINER_CLASSES}>
              <span className={PRICE_CLASSES}>{tier.price}</span>
              <span className={PERIOD_CLASSES}>{tier.period}</span>
            </div>
          </div>
          {tier.description && <p className={DESCRIPTION_CLASSES}>{tier.description}</p>}
          <div>
            {tier.cta && (
              <NewLinkButton
                title={tier.cta}
                href={tier.href}
                theme={tier.popular ? Theme.Dark : Theme.Light}
                width="full"
                onClick={() => analyticsHandler("Pricing Page", "Click", tier.cta || "Unknown")}
              />
            )}
          </div>

          <hr className={FEATURES_SECTION_CLASSES} />

          <div>
            <p className={FEATURES_TITLE_CLASSES}>Features</p>
            <ul className={FEATURES_LIST_CLASSES}>
              {tier.features.map((feature, idx) => (
                <li key={idx} className={FEATURE_ITEM_CLASSES}>
                  <CircleCheck size={12} className={FEATURE_ICON_CLASSES} />
                  <span className={FEATURE_TEXT_CLASSES}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const FAQItem: React.FC<{
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: (index: number) => void
}> = ({item, index, isOpen, onToggle}) => (
  <div key={index}>
    <div className={clsx(FAQ_ITEM_CLASSES, isOpen ? "pb-4" : "pb-8")} onClick={() => onToggle(index)}>
      <span
        className={clsx(
          FAQ_QUESTION_CLASSES,
          isOpen ? "text-tailCall-lightMode---primary-1200 dark:text-white" : "text-tailCall-lightMode---neutral-500",
        )}
      >
        {item.question}
      </span>
      <span className="text-tailCall-darkMode---primary-700 dark:text-white flex items-center justify-center">
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </span>
    </div>
    <div className={`${FAQ_ANSWER_CLASSES} ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
      <p dangerouslySetInnerHTML={{__html: item.answer}} className={`faq-answers ${FAQ_ANSWER_TEXT_CLASSES}`} />
    </div>
    {index < FAQS.length - 1 && <div className="bg-gradient-border h-[1px] w-full" />}
  </div>
)

const FAQSection: React.FC<{
  openIndex: number | null
  onToggle: (index: number) => void
}> = ({openIndex, onToggle}) => (
  <div className={FAQ_SECTION_CLASSES}>
    <div className={FAQ_HEADER_CLASSES}>
      <Heading as="h2" className={FAQ_TITLE_CLASSES}>
        Frequently Asked Questions
      </Heading>
      <div className={FAQ_SUBTITLE_CLASSES}>Get answers to common questions about our pricing plans and features.</div>
    </div>

    <div className="w-full">
      {FAQS.map((item, index) => (
        <FAQItem key={index} item={item} index={index} isOpen={openIndex === index} onToggle={onToggle} />
      ))}
    </div>
  </div>
)

const AIProvidersSection: React.FC = () => (
  <div className={AI_PROVIDERS_SECTION_CLASSES}>
    <div className="bg-tailCall-lightMode---neutral-300 dark:bg-tailCall-darkMode---neutral-700 h-[1px] w-full" />
    <div className={AI_PROVIDERS_HEADER_CLASSES}>
      <span className={AI_PROVIDERS_TITLE_CLASSES}>Works with every model offered by leading AI providers.</span>
      <span className={AI_PROVIDERS_SUBTITLE_CLASSES}>
        Seamlessly integrate with OpenAI, Anthropic, Google, xAI, Meta, Mistral, and Deepseek models.
      </span>
    </div>
    <div className={AI_PROVIDERS_GRID_CLASSES}>
      {AI_PROVIDERS.map(({title, lightLogoUrl, darkLogoUrl}) => (
        <AIProviderCard key={title} title={title} lightLogoUrl={lightLogoUrl} darkLogoUrl={darkLogoUrl} />
      ))}
    </div>
  </div>
)

// Main Component
const PricingPage: React.FC = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: location.pathname, title: "Pricing Page"})
  }, [location.pathname])

  const toggleIndex = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }, [])

  const pricingCards = useMemo(
    () => (
      <div className={PRICING_GRID_CLASSES}>
        {tiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    ),
    [],
  )

  return (
    <Layout title="Pricing" description="Simple, transparent pricing for ForgeCode">
      <HeroSection />
      <main>
        <Section className="py-16 lg:py-24 dark:bg-black bg-tailCall-light-1200">
          <PricingHeader />
          {pricingCards}
          <FAQSection openIndex={openIndex} onToggle={toggleIndex} />
          <AIProvidersSection />
        </Section>
      </main>
    </Layout>
  )
}

export default PricingPage
