import React from "react"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import Section from "../components/shared/Section"
import LinkButton from "../components/shared/LinkButton"
import {Theme} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"
import {analyticsHandler} from "@site/src/utils"
import {Check, Star, Crown} from "lucide-react"
import FinalCTA from "../components/home/FinalCTA"
import OpenAILogo from "@site/src/assets/logos/openai.svg"
import AnthropicLogo from "@site/src/assets/logos/anthropic.svg"
import GoogleLogo from "@site/src/assets/logos/google.svg"
import XAILogo from "@site/src/assets/logos/xai.svg"
import MetaLogo from "@site/src/assets/logos/meta.svg"
import MistralLogo from "@site/src/assets/logos/mistral.svg"
import DeepSeekLogo from "@site/src/assets/logos/deepseek.svg"

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
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: ["Basic AI model access", "Community support", "Local processing"],
      cta: "Get Started Free",
      href: pageLinks.signup,
      popular: false,
    },
    {
      name: "Pro",
      price: "$20",
      period: "/month",
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
      price: "$0",
      originalPrice: "$200",
      period: "/month",
      description: "🎉 Limited-time early access - FREE unlimited usage!",
      features: [
        "Everything in Pro",
        "Unlimited requests",
        "Latest AI models (Sonnet4, Gemini-2.5 pro, Grok-4, Gpt-4 series)",
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

  return (
    <Layout title="Pricing" description="Simple, transparent pricing for ForgeCode">
      <main>
        <Section className="py-16 lg:py-24">
          <div className="text-center mb-16">
            <Heading as="h1" className="text-display-medium lg:text-display-large mb-6">
              Simple Pricing
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free, upgrade when you're ready. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative border-dashed border-1 p-6 ${
                  tier.popular
                    ? "border-blue-500 bg-gradient-to-b from-blue-50 to-white transform scale-105"
                    : tier.special
                      ? "border-yellow-500 bg-gradient-to-b from-yellow-50 to-white"
                      : "border-gray-400 bg-white"
                } hover:shadow-xl transition-all duration-300`}
              >
                {/* {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-tailCall-white px-4 py-2 border-dashed border-1 border-gray-800 text-sm font-semibold flex items-center gap-2">
                      <Star size={16} />
                      Most Popular
                    </div>
                  </div>
                )} */}

                {tier.special && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-black px-4 py-2 border-dashed border-1 border-gray-800 text-sm font-semibold flex items-center gap-2">
                      <Crown size={16} />
                      Early Access
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 pt-8 sm:pt-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {tier.icon}
                    <h3 className="text-title-large font-bold">{tier.name}</h3>
                  </div>
                  <div className="mb-4">
                    {tier.originalPrice ? (
                      <div className="flex flex-col items-center">
                        <span className="text-lg text-gray-400 line-through decoration-2 mb-1">
                          {tier.originalPrice}
                          {tier.period}
                        </span>
                        <div className="flex items-baseline">
                          <span className="text-4xl lg:text-5xl font-bold text-green-600">{tier.price}</span>
                          <span className="text-gray-500 ml-2 text-sm">{tier.period}</span>
                        </div>
                        <span className="text-xs text-green-600 font-semibold mt-1 bg-green-100 px-2 py-1 rounded-full">
                          LIMITED TIME ONLY
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span
                          className={`text-3xl lg:text-4xl font-bold ${tier.name === "Early Access Special" ? "line-through decoration-2 text-gray-400" : ""}`}
                        >
                          {tier.price}
                        </span>
                        <span className="text-gray-500 ml-2 text-sm">{tier.period}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check size={16} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 mt-auto">
                  <LinkButton
                    title={tier.cta}
                    href={tier.href}
                    theme={tier.popular || tier.special ? Theme.Dark : Theme.Light}
                    width="full"
                    onClick={() => analyticsHandler("Pricing Page", "Click", tier.cta)}
                  />
                  <p className="text-xs text-gray-500 text-center italic">{tier.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-32 text-center mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Works with every model offered by leading AI providers.
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Seamlessly integrate with OpenAI, Anthropic, Google, xAI, Meta, Mistral, and Deepseek models.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 max-w-5xl mx-auto">
              {aiProviders.map((provider) => (
                <div
                  key={provider.name}
                  className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mb-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                    <provider.logo className="w-full h-full" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{provider.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <Heading as="h2" className="text-display-tiny text-center mb-12">
              Frequently Asked Questions
            </Heading>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-title-medium font-semibold mb-3">How do I purchase additional prompts?</h3>
                <p className="text-gray-700">
                  Additional prompts can be purchased directly through your ForgeCode dashboard when you approach your
                  monthly limit.
                  <strong>Pro users</strong> can buy 250 additional prompts for $10 USD, while These additional prompts
                  are added to your current month's allowance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-title-medium font-semibold mb-3">
                  What's the difference between Free, Pro, and Max plans?
                </h3>
                <p className="text-gray-700">
                  <strong>Free ($0):</strong> Basic AI model access with limited daily usage, perfect for getting
                  started.
                  <br />
                  <strong>Pro ($20/month):</strong> Access to premium models (OpenAI, Claude, Gemini) with 500 requests
                  per month and priority support.
                  <br />
                  <strong>Max (FREE - normally $200/month):</strong> Unlimited access.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-title-medium font-semibold mb-3">What are "top tier" models?</h3>
                <p className="text-gray-700">
                  Top tier models include the most advanced AI models like GPT-4, Claude-4, and Gemini 2.5 - the premium
                  models from each provider that offer the best performance for complex coding tasks.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-title-medium font-semibold mb-3">How does the Max plan unlimited usage work?</h3>
                <p className="text-gray-700">
                  Max plan users get truly unlimited access to all AI models during with no daily caps, or usage
                  restrictions.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-title-medium font-semibold mb-3">
                  What happens when I exceed my monthly prompt limit?
                </h3>
                <p className="text-gray-700">
                  <strong>Free users:</strong> Hit daily usage limits and need to wait for reset or upgrade.
                  <br />
                  <strong>Pro users:</strong> After using your 500 included prompts, you can purchase additional
                  prompts: 250 prompts for $10 USD.
                  <br />
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-title-medium font-semibold mb-3">Is my code secure and private?</h3>
                <p className="text-gray-700">
                  Absolutely. ForgeCode runs entirely on your local machine using your own API keys. Your code never
                  leaves your computer - no cloud processing, complete privacy and security.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-title-medium font-semibold mb-3">Can I upgrade or downgrade my plan anytime?</h3>
                <p className="text-gray-700">
                  Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at
                  your next billing cycle.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-title-medium font-semibold mb-3">Do I need my own API keys?</h3>
                <p className="text-gray-700">
                  For Free users, you'll need your own API keys for AI models. Pro and Max users get included access to
                  premium models without needing separate API keys, plus the option to use your own keys for additional
                  providers.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <FinalCTA showPricingButton={false} />
      </main>
    </Layout>
  )
}

export default PricingPage
