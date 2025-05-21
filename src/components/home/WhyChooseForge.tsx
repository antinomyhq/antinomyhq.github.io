import React from "react"
import Heading from "@theme/Heading"
import Section from "../shared/Section"
import TrustedByMarquee from "./TrustedByMarquee"
import {companies} from "@site/src/constants"

const WhyChooseForge = (): JSX.Element => {
  return (
    <Section className="customer-container !bg-tailCall-dark-600 h-full w-full text-tailCall-light-100 !bg-contain md:!bg-center md:!bg-top py-16 md:py-20 lg:pt-36 lg:pb-24">
      <div className="flex flex-row items-center justify-center">
        <Heading
          as="h5"
          className="text-title-large sm:text-display-tiny lg:text-display-medium flex flex-col items-center md:flex-row lg:mb-12"
        >
          <span>Why Choose</span>
          <span className="bg-tailCall-yellow rounded-lg text-black px-SPACE_01 ml-SPACE_02">Forge?</span>
        </Heading>
      </div>

      <p className="text-center text-content-medium lg:text-content-large max-w-3xl mx-auto mb-16">
        Forge uniquely combines the power of an industry-leading AI coding agent with the transparency and hackability
        of an open-source project. It's <strong>your coding partner, on your terms</strong>.
      </p>

      <div className="flex flex-col space-y-SPACE_10 md:flex-row md:space-x-SPACE_06 md:space-y-0">
        {/* Card 1 */}
        <div className="customer-feedback-card md:w-[50%] flex flex-col items-center justify-between bg-tailCall-dark-500 text-white py-SPACE_08 px-SPACE_06 text-center text-content-small gap-y-SPACE_06 rounded-xl">
          <span className="sm:text-content-medium lg:text-content-large !font-bold !text-title-large mb-4">
            For Individual <span className="text-tailCall-yellow">Developers</span>
          </span>
          <p className="text-content-small sm:text-content-medium mb-4">
            Forge removes the complexity from your workflow, letting you focus on creative problem-solving. With Forge,
            you can:
          </p>
          <ul className="text-left list-disc pl-5 space-y-2 text-content-small sm:text-content-medium">
            <li>Implement new features with natural language descriptions</li>
            <li>Debug complex issues with contextual assistance</li>
            <li>Explore and understand unfamiliar codebases quickly</li>
            <li>Refactor and modernize legacy code intelligently</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="customer-feedback-card md:w-[50%] flex flex-col items-center justify-between bg-tailCall-dark-500 text-white py-SPACE_08 px-SPACE_06 text-center text-content-small gap-y-SPACE_06 rounded-xl">
          <span className="sm:text-content-medium lg:text-content-large !font-bold !text-title-large mb-4">
            For <span className="text-tailCall-yellow">Enterprise</span> Teams
          </span>
          <p className="text-content-small sm:text-content-medium mb-4">
            Implement a secure AI coding solution that respects your enterprise security requirements. With Forge, your
            team can:
          </p>
          <ul className="text-left list-disc pl-5 space-y-2 text-content-small sm:text-content-medium">
            <li>Use on-premise AI models for complete data privacy</li>
            <li>Customize workflows with your internal coding standards</li>
            <li>Onboard new team members faster with codebase assistance</li>
            <li>Integrate with existing CI/CD pipelines and tools</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 text-center">
        <p className="text-lg italic max-w-3xl mx-auto mb-14">
          "Join developers worldwide in embracing a faster, smarter way to code – without surrendering control.
          <span className="font-bold"> With Forge, you write the rules.</span>"
        </p>
      </div>

      <TrustedByMarquee title="Used by developers at" logos={companies} />
    </Section>
  )
}

export default WhyChooseForge
