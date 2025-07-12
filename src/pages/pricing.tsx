import React, {useState} from "react"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import Section from "../components/shared/Section"
import {Theme} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"
import {analyticsHandler} from "@site/src/utils"
import {Check, Minus, Plus} from "lucide-react"
import FinalCTA from "../components/home/FinalCTA"
import OpenAILogo from "@site/src/assets/logos/openai.svg"
import AnthropicLogo from "@site/src/assets/logos/anthropic.svg"
import GoogleLogo from "@site/src/assets/logos/google.svg"
import XAILogo from "@site/src/assets/logos/xai.svg"
import MetaLogo from "@site/src/assets/logos/meta.svg"
import MistralLogo from "@site/src/assets/logos/mistral.svg"
import DeepSeekLogo from "@site/src/assets/logos/deepseek.svg"
import NewLinkButton from "../components/shared/NewLinkButton"
import SpotlightSpan from "../components/home/SpotlightCursor"
import clsx from "clsx"
import Button from "../components/shared/Button"

// AI Providers array for iteration
const aiProviders = [
  {name: "OpenAI", logo: OpenAILogo},
  {name: "Anthropic", logo: AnthropicLogo},
  {name: "Google", logo: GoogleLogo},
  {name: "xAI", logo: XAILogo},
  {name: "Meta", logo: MetaLogo},
  {name: "Mistral", logo: MistralLogo},
  {name: "Deepseek", logo: DeepSeekLogo},
]

const PricingPage = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const tiers = [
    {
      name: "Free",
      title: "Basic",
      price: "$0",
      period: "Forever",
      description: "Perfect for getting started",
      features: ["Basic AI model access", "Community support", "Local processing"],
      cta: "Get Started Free",
      href: pageLinks.signup,
      popular: false,
    },
    {
      name: "Pro",
      title: "Most Popular",
      price: "$20",
      period: "/per month",
      description: "For professional developers",
      features: [
        "Everything in Free",
        "Premium AI models (GPT-4, Claude-4, Grok-3, Gemini-2.5)",
        "500 prompts per month",
        "Additional prompts: 250 for $10 USD",
        "Priority support",
      ],
      cta: "Start Pro Plan",
      href: pageLinks.signup,
      popular: true,
      note: "Most popular for individual developers",
    },
    {
      name: "Max",
      title: "Early Access",
      price: "$0",
      originalPrice: "$200",
      period: "/month",
      description: "🎉 Limited-time early access - FREE unlimited usage!",
      features: [
        "Everything in Pro",
        "Unlimited requests",
        "Latest AI models",
        "24/7 priority support",
        "Advanced analytics",
        "Custom integrations",
      ],
      cta: "Get Unlimited Access",
      href: pageLinks.signup,
      popular: false,
      note: "🔥 Early access special - FREE unlimited now, normally $200/month",
      special: true,
    },
  ]

  const faqs = [
    {
      question: "How do I purchase additional prompts?",
      answer: `Additional prompts can be purchased directly through your ForgeCode dashboard when you approach your monthly limit.
                Pro users can buy 250 additional prompts for $10 USD, while Max users (after early access) can purchase 1000 additional prompts for $25 USD.
              These additional prompts are added to your current month's allowance.`,
    },
    {
      question: "What's the difference between Free, Pro, and Max plans?",
      answer: `Free ($0): Basic AI model access with limited daily usage, perfect for getting started.
               Pro ($20/month): Access to premium models (OpenAI, Claude, Gemini) with 500 requests per month and priority support.
               Max (FREE - normally $200/month): Normally 10,000 prompts per month, but unlimited access during this limited-time early access offer.`,
    },
    {
      question: "What does '20X the Pro plan' mean for Max?",
      answer: `The Max plan offers 20 times the value of Pro at 10 times the price. While Pro gives you 500 requests
                    per month, Max normally provides 10,000 requests monthly. During this limited-time early access, Max
                    users get unlimited requests with no restrictions, plus exclusive early access features and priority
                    support.`,
    },
    {
      question: "What are 'top tier' models?",
      answer: `Top tier models include the most advanced AI models like GPT-4, Claude-4, and Gemini 2.5 - the premium
                  models from each provider that offer the best performance for complex coding tasks.`,
    },
    {
      question: "How does the Max plan unlimited usage work?",
      answer: `Max plan users get truly unlimited access to all AI models during this limited-time early access
                    offer. Normally, Max provides 10,000 prompts per month, but early access users enjoy unlimited
                    requests with no rate limits, daily caps, or usage restrictions at the special $0/month price
                    (normally $200/month).`,
    },
    {
      question: "What happens when I exceed my prompt limit?",
      answer: `Free users: Hit daily usage limits and need to wait for reset or upgrade.
                    Pro users: After using your 500 included prompts, you can purchase additional
                    prompts: 250 prompts for $10 USD.
                    Max users: Currently unlimited during early access. After early access ends, you can
                    purchase additional prompts: 1000 prompts for $25 USD.`,
    },
    {
      question: "Is my code secure and private?",
      answer: `Absolutely. ForgeCode runs entirely on your local machine using your own API keys. Your code never
                    leaves your computer - no cloud processing, no data collection, complete privacy and security.`,
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: `Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at
                    your next billing cycle. The Max plan unlimited access is a limited-time early access offer - normally
                    Max provides 10,000 prompts per month.`,
    },
    {
      question: "Do I need my own API keys?",
      answer: `For Free users, you'll need your own API keys for AI models. Pro and Max users get included access to
                    premium models without needing separate API keys, plus the option to use your own keys for additional
                    providers.`,
    },
  ]

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Layout title="Pricing" description="Simple, transparent pricing for ForgeCode">
      <div className="flex gap-[600px] h-[278px]">
        <div className="px-12 py-20">
          <div className="max-w-3xl mx-auto text-left space-y-2">
            <h2 className="text-4xl md:text-5xl font-[400] uppercase xl:text-[60px] text-radial-pricing-text opacity-70 font-bebas">
              START FOR FREE.
            </h2>
            <h2 className="text-4xl md:text-5xl font-[400] uppercase xl:text-[60px] text-radial-pricing-text opacity-70 font-bebas">
              SCALE WHEN YOU'RE READY.
            </h2>
          </div>
        </div>
        <div className="mt-[150px] text-[24px] text-[#747474]">
          No credit card required. No lock-in.
          <div>Just productivity from day one</div>
        </div>
      </div>
      <main>
        <Section className="py-16 lg:py-24 dark:bg-black bg-white">
          <div className="text-center mb-16">
            <Heading
              as="h1"
              className="text-content-regular text-4xl mb-6 text-tailCall-lightMode---neutral-900 dark:text-white"
            >
              Simple Pricing
            </Heading>
            <p className="text-title-text-mini text-tailCall-border-light-300 dark:text-tailCall-darkMode---neutral-300 max-w-2xl mx-auto">
              Start free, upgrade when you're ready. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative border-solid rounded-[18px] border-[0.732px] border-[#737373] shadow-[0px 1.464px 1.464px 0px rgba(0, 0, 0, 0.08)] p-6 bg-white dark:bg-tailCall-darkMode---neutral-900 ${
                  tier.popular
                    ? "border-tailCall-darkMode---neutral-500 bg-white dark:bg-tailCall-darkMode---neutral-900"
                    : tier.special
                      ? "border-tailCall-darkMode---neutral-500 bg-white dark:bg-tailCall-darkMode---neutral-900"
                      : "border-tailCall-darkMode---neutral-500 bg-white"
                } hover:shadow-xl dark:hover:shadow-none hover:shadow-tailCall-lightMode---primary-100 transition-all duration-300`}
              >
                {/* {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-tailCall-white px-4 py-2 border-dashed border-1 border-gray-800 text-sm font-semibold flex items-center gap-2">
                      <Star size={16} />
                      Most Popular
                    </div>
                  </div>
                )} */}

                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-4 py-2 border-solid border-1 rounded-[5px] border-gray-800 text-sm font-semibold flex items-center gap-2">
                    {tier.title}
                  </div>
                </div>

                <div className="text-start mb-6 pt-8 sm:pt-6">
                  <div className="flex items-start justify-start gap-2">
                    {/* {tier.icon} */}
                    <h3 className="text-[29px] font-[400] text-tailCall-lightMode---neutral-900 dark:text-tailCall-white">
                      {tier.name}
                    </h3>
                  </div>
                  <div className="mb-4">
                    {tier.originalPrice ? (
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-lg text-gray-400 line-through decoration-2 mb-1">
                            {tier.originalPrice}
                            {tier.period}
                          </span>
                          <div className="flex items-baseline">
                            <span className="text-4xl lg:text-5xl text-white">{tier.price}</span>
                            <span className="text-gray-500 ml-2 text-sm">{tier.period}</span>
                          </div>
                        </div>
                        <div className="text-[12px] text-white font-[400] mt-1 bg-[#4FDB1C] opacity-22 px-2 py-1 rounded-full">
                          Limited Time only
                        </div>
                      </div>
                    ) : (
                      <div>
                        <span
                          className={`text-title-text-large text-3xl lg:text-4xl font-bold text-tailCall-lightMode---neutral-600 dark:text-tailCall-white ${tier.name === "Early Access Special" ? "line-through decoration-2 text-gray-400" : ""}`}
                        >
                          {tier.price}
                        </span>
                        <span className="text-gray-500 dark:text-tailCall-white ml-2 text-sm">{tier.period}</span>
                      </div>
                    )}
                  </div>
                </div>
                <hr className="border-gray-300" />
                <ul className="space-y-3 mb-6 min-h-[280px]">
                  <p>Features</p>
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check size={16} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-tailCall-darkMode---neutral-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 mt-auto">
                  <NewLinkButton
                    title={tier.cta}
                    href={tier.href}
                    theme={tier.popular || tier.special ? Theme.Dark : Theme.Light}
                    width="full"
                    onClick={() => analyticsHandler("Pricing Page", "Click", tier.cta)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between" style={{alignItems: "center"}}>
            <div className="" style={{marginRight: "112px"}}>
              <Heading
                as="h2"
                className="text-content-regular text-left mb-1 text-tailCall-lightMode---neutral-900 dark:text-tailCall-white"
              >
                FAQ
              </Heading>
              <div className="text-sub-title-text-regular text-tailCall-border-light-300 font-kanit">
                Select from best plan, ensuring a perfect match. Need more or less? Customize your subscription for a
                seamless fit!
              </div>
            </div>
            {/* FAQ Section */}
            <div className="mt-24 w-[1728px]">
              {faqs.map((item, index) => (
                <div key={index}>
                  <button
                    className="flex w-full justify-between items-center py-12 text-left focus:outline-none bg-black border-none"
                    onClick={() => toggleIndex(index)}
                  >
                    <span className="text-question-title text-white">{item.question}</span>
                    <span className="text-white">{openIndex === index ? <Minus size={20} /> : <Plus size={20} />}</span>
                  </button>
                  <div className="bg-gradient-border h-[1px] w-full"></div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-tailCall-light-800 py-8 font-kanit text-[23px]">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
        </Section>
        {/* <FinalCTA showPricingButton={false} /> */}
      </main>
    </Layout>
  )
}

export default PricingPage
