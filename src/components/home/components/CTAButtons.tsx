import React from "react"
import {useHistory} from "@docusaurus/router"
import {analyticsHandler} from "@site/src/utils"
import PrimaryButton from "../../shared/PrimaryButton"

export default function CTAButtons({className = ""}: {className?: string}) {
  const history = useHistory()

  const handleSignUp = () => {
    analyticsHandler("Home Page", "Click", "Sign Up")
    window.open("https://app.forgecode.dev/app/", "_blank")
  }

  const handleGetStarted = () => {
    analyticsHandler("Home Page", "Click", "Sign Up")
    history.push("/docs/installation/")
  }

  return (
    <div className={`flex gap-4 z-10 ${className}`}>
      <PrimaryButton onClick={handleSignUp} variant="solid">
        Sign up
      </PrimaryButton>
      <PrimaryButton onClick={handleGetStarted} variant="outline">
        Get Started
      </PrimaryButton>
    </div>
  )
}
