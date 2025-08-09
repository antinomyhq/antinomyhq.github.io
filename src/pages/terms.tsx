import Layout from "@theme/Layout"
import React, {useEffect} from "react"
import {useLocation} from "@docusaurus/router"
import ReactGA from "react-ga4"
import Section from "../components/shared/Section"
import Heading from "@theme/Heading"
import SpotlightSpan from "../components/home/components/SpotlightCursor"

const TermsPage = (): JSX.Element => {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: location.pathname, title: "Terms and Conditions"})
  }, [])

  return (
    <Layout title="Terms and Conditions" description="Terms and Conditions and Fair Usage Policy for ForgeCode">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="py-12 dark:bg-black bg-tailCall-light-1200 border-b border-solid border-transparent border-b-tailCall-lightMode---neutral-300 dark:border-b-tailCall-darkMode---neutral-700">
          <div className="flex flex-col lg:gap-0 items-start xl:items-center xl:flex-row justify-between w-full py-5 px-2">
            <div className="flex flex-col mt-2">
              <SpotlightSpan
                className="font-bebas !font-normal text-[45px] md:text-display-small lg:text-display-medium xl:text-display-large-semi tracking-normal"
                text="Terms & Conditions"
                showHighlighted
              />
            </div>
            <span className="block mt-2 md:mt-0 max-w-[500px] xl:mt-20 font-kanit !font-normal lg:leading-8 xl:leading-[32px] text-[16px] md:text-title-small lg:text-[20px] xl:text-[22px] text-tailCall-darkMode---neutral-500 tracking-normal">
              Fair usage policy and terms of service for ForgeCode
            </span>
          </div>
        </div>
      </div>

      <main>
        <Section className="py-16 lg:py-24 dark:bg-black bg-tailCall-light-1200">
          <div className="max-w-4xl mx-auto">
            {/* Fair Usage Policy Section */}
            <div className="mb-12">
              <Heading
                as="h1"
                className="text-title-large !font-normal md:text-content-regular mb-8 text-tailCall-lightMode---neutral-900 dark:text-white font-kanit"
              >
                Fair Usage Policy
              </Heading>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="mb-8">
                  <h2 className="text-title-semi-large font-normal text-tailCall-darkMode---neutral-600 dark:text-white mb-4">
                    1. API Usage Restrictions
                  </h2>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-tailCall-darkMode---neutral-600 dark:text-white mb-3">
                      Prohibited Uses of Forge's API
                    </h3>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-2">
                      Forge's API and services are intended to be used only by the account holder within the ForgeCode
                      application. You may use ForgeCode for any projects, but the API cannot be used outside of the
                      ForgeCode application.
                    </p>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-2">
                      <strong>The following uses are strictly prohibited:</strong>
                    </p>
                    <ul className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 ml-4 mb-4">
                      <li>Using Forge's API to power other applications, services, or tools</li>
                      <li>Integrating Forge's API into third-party software</li>
                      <li>Reselling or redistributing access to Forge's API</li>
                      <li>Using Forge as a backend service for other applications</li>
                    </ul>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 font-semibold">
                      <strong>Violation Consequences:</strong> Your account will be permanently barred with no refund
                      provided.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-title-semi-large font-normal text-tailCall-darkMode---neutral-600 dark:text-white mb-4">
                    2. Account Sharing Restrictions
                  </h2>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-tailCall-darkMode---neutral-600 dark:text-white mb-3">
                      Personal Use Only
                    </h3>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-2">
                      Your ForgeCode account and any associated API keys are for your personal use only and cannot be
                      shared with others.
                    </p>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-2">
                      <strong>The following activities are strictly prohibited:</strong>
                    </p>
                    <ul className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 ml-4 mb-4">
                      <li>Sharing your account credentials with others</li>
                      <li>Allowing others to use your ForgeCode account</li>
                      <li>Distributing your API keys to third parties</li>
                      <li>Creating shared or team accounts on individual plans</li>
                    </ul>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 font-semibold">
                      <strong>Violation Consequences:</strong> Your account will be immediately suspended and no refund
                      will be provided.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-tailCall-darkMode---neutral-600 dark:text-white mb-3">
                      Multi-Device Usage Policy
                    </h3>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-2">
                      Account holders may use their ForgeCode account on up to two (2) devices simultaneously, subject
                      to the following conditions:
                    </p>
                    <ul className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 ml-4 mb-4">
                      <li>Both devices must be used exclusively by the account holder</li>
                      <li>Daily usage limits apply to the combined usage across all devices</li>
                      <li>Account credentials must not be shared with any third parties</li>
                      <li>All devices must comply with the same terms and restrictions outlined in this policy</li>
                    </ul>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-2">
                      <strong>Device Limit Violation:</strong> Using your account on more than two devices constitutes a
                      violation of our Fair Usage Policy and may result in immediate account suspension without refund.
                    </p>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 font-semibold">
                      <strong>Monitoring:</strong> We monitor device usage patterns to ensure compliance with this
                      policy.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-title-semi-large font-normal text-tailCall-darkMode---neutral-600 dark:text-white mb-4">
                    3. Acceptable Use
                  </h2>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-tailCall-darkMode---neutral-600 dark:text-white mb-3">
                      Permitted Uses
                    </h3>
                    <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-2">
                      The following uses are explicitly permitted for the account holder:
                    </p>
                    <ul className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 ml-4 mb-4">
                      <li>Using ForgeCode for any coding projects and development (personal or commercial)</li>
                      <li>Code generation, debugging, and refactoring within the ForgeCode application</li>
                      <li>Learning and educational purposes</li>
                      <li>Using your own API keys (BYOK) with ForgeCode for unlimited usage</li>
                      <li>Switching between different AI providers within ForgeCode</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-title-semi-large font-normal text-tailCall-darkMode---neutral-600 dark:text-white mb-4">
                    4. Monitoring and Enforcement
                  </h2>
                  <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-4">
                    We actively monitor usage patterns to ensure compliance with our fair usage policy. Unusual usage
                    patterns that suggest API abuse or account sharing will be investigated.
                  </p>
                  <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-4">
                    <strong>We reserve the right to:</strong>
                  </p>
                  <ul className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 ml-4 mb-4">
                    <li>Suspend or terminate accounts that violate these terms</li>
                    <li>Refuse refunds for accounts terminated due to policy violations</li>
                    <li>Update these terms as needed to maintain fair usage</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-title-semi-large font-normal text-tailCall-darkMode---neutral-600 dark:text-white mb-4">
                    5. Contact and Questions
                  </h2>
                  <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-4">
                    If you have questions about what constitutes acceptable use or need clarification on these policies,
                    please contact our support team before proceeding.
                  </p>
                  <p className="text-tailCall-darkMode---neutral-600 dark:text-tailCall-light-800 mb-6">
                    <strong>Note:</strong> These restrictions help us maintain service quality and fair access for all
                    users. Thank you for your cooperation.
                  </p>
                </div>

                <div className="border-t border-tailCall-darkMode---neutral-300 dark:border-tailCall-darkMode---neutral-700 pt-6">
                  <p className="text-tailCall-darkMode---neutral-500 dark:text-tailCall-darkMode---neutral-400 text-sm">
                    <strong>Last updated:</strong> July 2025
                    <br />
                    <strong>Effective date:</strong> These terms apply to all current and future ForgeCode users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  )
}

export default TermsPage
