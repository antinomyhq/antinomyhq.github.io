import BgForgeCode from "@site/static/images/home/logo-light.svg"
import Heading from "@theme/Heading"
import React, {JSX} from "react"
import Section from "../shared/Section"

interface FinalCTAProps {
  showPricingButton?: boolean
}

const FinalCTA = ({showPricingButton = true}: FinalCTAProps): JSX.Element => {
  return (
    <div className="bg-tailCall-terminal-bg-primary w-full">
      <Section className="!px-0 !py-0">
        <div className="relative flex items-center justify-center h-[280px] sm:h-[452px] w-full overflow-hidden border-t border-tailCall-terminal-border terminal-grid-bg">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <BgForgeCode className="w-full h-full" />
          </div>
          <div className="flex flex-col items-center max-w-4xl space-y-SPACE_04 sm:space-y-SPACE_06 px-4 sm:px-6">
            <Heading
              as="h5"
              className="text-[2rem] sm:text-[3.5rem] text-center mb-0 text-tailCall-terminal-green-primary terminal-glow whitespace-nowrap font-vt323 tracking-wide"
            >
              Ready to Get Started?
            </Heading>
            <p className="text-content-medium max-w-2xl mx-auto mb-4 text-center text-tailCall-terminal-text-primary">
              Join thousands of developers already using ForgeCode. Start free today.
            </p>
            {/* <div className="flex flex-col sm:flex-row space-y-SPACE_03 sm:space-y-0 sm:space-x-SPACE_06">
            <LinkButton
              title="Sign Up"
              href={pageLinks.signup}
              theme={Theme.Dark}
              width="small"
              onClick={() => analyticsHandler("Home Page", "Click", "Final CTA - Get Early Access")}
            />
            {showPricingButton && (
              <LinkButton
                title="View Pricing"
                href={pageLinks.pricing}
                theme={Theme.Light}
                width="small"
                onClick={() => analyticsHandler("Home Page", "Click", "Final CTA - View Pricing")}
              />
            )}
          </div> */}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default FinalCTA
