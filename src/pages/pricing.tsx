import React from "react"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import Section from "../components/shared/Section"
import LinkButton from "../components/shared/LinkButton"
import {Theme} from "@site/src/constants"

import {Check, Star, Crown} from "lucide-react"
import FinalCTA from "../components/home/FinalCTA"
import OpenAILogo from "@site/src/assets/logos/openai.svg"
import AnthropicLogo from "@site/src/assets/logos/anthropic.svg"
import GoogleLogo from "@site/src/assets/logos/google.svg"
import XAILogo from "@site/src/assets/logos/xai.svg"
import MetaLogo from "@site/src/assets/logos/meta.svg"
import MistralLogo from "@site/src/assets/logos/mistral.svg"
import DeepSeekLogo from "@site/src/assets/logos/deepseek.svg"
import {pageLinks} from "../constants/routes"

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
      cta: "Coming Soon",
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
      cta: "Coming Soon",
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
      cta: "Coming Soon",
      href: pageLinks.signup,
      popular: false,
      note: "🔥 Early access special - FREE unlimited now, normally $200/month",
      special: true,
    },
  ]

  return (
    <Layout title="Pricing" description="Simple, transparent pricing for ForgeCode">
      <main>
        <Section className="py-6 lg:py-10 terminal-grid-bg">
          <div className="text-center mb-8">
            <Heading as="h1" className="text-3xl sm:text-display-medium lg:text-display-large mb-6 whitespace-nowrap text-terminal-green-primary terminal-glow font-mono drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]">
              Simple Pricing
            </Heading>
            <p className="text-xl text-terminal-text-secondary max-w-2xl mx-auto font-mono">
              Start free, upgrade when you're ready. <span className="text-terminal-green-primary">No hidden fees.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-4xl lg:max-w-none mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className="relative dash p-6 lg:p-4 flex flex-col bg-terminal-bg-secondary border-terminal-border hover:border-terminal-green-primary hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all duration-300"
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
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="terminal-badge">
                      <Crown size={16} />
                      EARLY ACCESS
                    </div>
                  </div>
                )}

                <div
                  className={`text-center mb-4 sm:mb-6 ${tier.special ? "pt-10 sm:pt-12 lg:pt-10" : "pt-4 sm:pt-6 lg:pt-4"}`}
                >
                  <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-terminal-bg-primary bg-terminal-green-primary font-mono uppercase px-4 py-2 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                      {tier.name}
                    </h3>
                  </div>

                  {/* Pricing section */}
                  <div className="mb-4">
                    {tier.originalPrice ? (
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-base text-terminal-text-secondary line-through decoration-2 font-mono">
                          {tier.originalPrice}
                          {tier.period}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-terminal-green-primary font-mono terminal-glow">
                            {tier.price}
                          </span>
                          <span className="text-terminal-text-secondary text-base font-mono">{tier.period}</span>
                        </div>
                        <span className="terminal-badge mt-2">
                          LIMITED TIME ONLY
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-terminal-green-primary font-mono terminal-glow">
                            {tier.price}
                          </span>
                          <span className="text-terminal-text-secondary text-base font-mono">{tier.period}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 pl-3 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3 group">
                      <Check size={14} className="text-terminal-green-primary flex-shrink-0 mt-1 sm:w-4 sm:h-4 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                      <span className="text-terminal-text-primary text-xs sm:text-sm leading-relaxed font-mono group-hover:text-terminal-green-primary transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {tier.note && (
                    <p className="text-xs sm:text-xs text-terminal-text-secondary text-center italic leading-tight mb-3 font-mono">
                      {tier.note}
                    </p>
                  )}
                  <LinkButton title={tier.cta} theme={Theme.Outlined} width="full" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-32 text-center mb-24">
            <h2 className="text-3xl font-bold text-terminal-green-primary terminal-glow mb-4 font-mono drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">
              Works with every model offered by leading AI providers.
            </h2>
            <p className="text-terminal-text-secondary mb-12 max-w-2xl mx-auto font-mono">
              Seamlessly integrate with <span className="text-terminal-green-primary">OpenAI, Anthropic, Google, xAI, Meta, Mistral, and Deepseek</span> models.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 max-w-5xl mx-auto">
              {aiProviders.map((provider) => (
                <div
                  key={provider.name}
                  className="flex flex-col items-center p-6 bg-terminal-bg-secondary dash border-terminal-border hover:border-terminal-green-primary hover:shadow-[0_0_25px_rgba(74,222,128,0.4)] hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 mb-3 text-terminal-text-secondary group-hover:text-terminal-green-primary group-hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.8)] transition-all duration-300">
                    <provider.logo className="w-full h-full" />
                  </div>
                  <span className="text-sm font-medium text-terminal-text-primary group-hover:text-terminal-green-primary transition-colors font-mono">{provider.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <Heading as="h2" className="text-display-tiny text-center mb-12 text-terminal-green-primary terminal-glow font-mono drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">
              Frequently Asked Questions
            </Heading>

            <div className="space-y-8">
              <div className="bg-terminal-bg-secondary p-6 dash border-terminal-border hover:border-terminal-green-primary/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 group">
                <h3 className="text-title-medium font-semibold mb-3 text-terminal-green-primary font-mono group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">How do I purchase additional prompts?</h3>
                <p className="text-terminal-text-primary font-mono">
                  Additional prompts can be purchased directly through your ForgeCode dashboard when you approach your
                  monthly limit.
                  <strong className="text-terminal-green-primary">Pro users</strong> can buy 250 additional prompts for $10 USD, while These additional prompts
                  are added to your current month's allowance.
                </p>
              </div>

              <div className="bg-terminal-bg-secondary p-6 dash border-terminal-border hover:border-terminal-green-primary/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 group">
                <h3 className="text-title-medium font-semibold mb-3 text-terminal-green-primary font-mono group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
                  What's the difference between Free, Pro, and Max plans?
                </h3>
                <p className="text-terminal-text-primary font-mono">
                  <strong className="text-terminal-green-primary">Free ($0):</strong> Basic AI model access with limited daily usage, perfect for getting
                  started.
                  <br />
                  <strong className="text-terminal-green-primary">Pro ($20/month):</strong> Access to premium models (OpenAI, Claude, Gemini) with 500 requests
                  per month and priority support.
                  <br />
                  <strong className="text-terminal-green-primary">Max (FREE - normally $200/month):</strong> Unlimited access.
                </p>
              </div>

              <div className="bg-terminal-bg-secondary p-6 dash border-terminal-border hover:border-terminal-green-primary/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 group">
                <h3 className="text-title-medium font-semibold mb-3 text-terminal-green-primary font-mono group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">What are "top tier" models?</h3>
                <p className="text-terminal-text-primary font-mono">
                  Top tier models include the most advanced AI models like GPT-4, Claude-4, and Gemini 2.5 - the premium
                  models from each provider that offer the best performance for complex coding tasks.
                </p>
              </div>

              <div className="bg-terminal-bg-secondary p-6 dash border-terminal-border hover:border-terminal-green-primary/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 group">
                <h3 className="text-title-medium font-semibold mb-3 text-terminal-green-primary font-mono group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">How does the Max plan unlimited usage work?</h3>
                <p className="text-terminal-text-primary font-mono">
                  Max plan users get truly unlimited access to all AI models during with no daily caps, or usage
                  restrictions.
                </p>
              </div>

              <div className="bg-terminal-bg-secondary p-6 dash border-terminal-border hover:border-terminal-green-primary/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 group">
                <h3 className="text-title-medium font-semibold mb-3 text-terminal-green-primary font-mono group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
                  What happens when I exceed my monthly prompt limit?
                </h3>
                <p className="text-terminal-text-primary font-mono">
                  <strong className="text-terminal-green-primary">Free users:</strong> Hit daily usage limits and need to wait for reset or upgrade.
                  <br />
                  <strong className="text-terminal-green-primary">Pro users:</strong> After using your 500 included prompts, you can purchase additional
                  prompts: 250 prompts for $10 USD.
                  <br />
                </p>
              </div>

              <div className="bg-terminal-bg-secondary p-6 dash border-terminal-border hover:border-terminal-green-primary/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 group">
                <h3 className="text-title-medium font-semibold mb-3 text-terminal-green-primary font-mono group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">Is my code secure and private?</h3>
                <p className="text-terminal-text-primary font-mono">
                  Absolutely. ForgeCode runs entirely on your local machine using your own API keys. Your code never
                  leaves your computer - no cloud processing, complete privacy and security.
                </p>
              </div>

              <div className="bg-terminal-bg-secondary p-6 dash border-terminal-border hover:border-terminal-green-primary/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 group">
                <h3 className="text-title-medium font-semibold mb-3 text-terminal-green-primary font-mono group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">Can I upgrade or downgrade my plan anytime?</h3>
                <p className="text-terminal-text-primary font-mono">
                  Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at
                  your next billing cycle.
                </p>
              </div>

              <div className="bg-terminal-bg-secondary p-6 dash border-terminal-border hover:border-terminal-green-primary/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 group">
                <h3 className="text-title-medium font-semibold mb-3 text-terminal-green-primary font-mono group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">Do I need my own API keys?</h3>
                <p className="text-terminal-text-primary font-mono">
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
