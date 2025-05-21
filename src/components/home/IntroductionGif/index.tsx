import React from "react"
import "./style.css"

const IntroductionGif: React.FC = () => {
  return (
    <div className="gif-wrapper py-10">
      <div className="text-center mb-4">
        <h2 className="text-title-large sm:text-display-tiny">See Forge in Action</h2>
        <p className="text-content-small sm:text-content-medium max-w-2xl mx-auto">
          Ask questions, request code implementations, solve bugs, and more – all without leaving your terminal.
        </p>
      </div>
      <div className="gif-container">
        <img
          src={require("@site/static/images/home/introduction-animation.gif").default}
          alt="Code Forge Demonstration"
          className="w-full h-full object-fill"
          loading="lazy"
          style={{objectPosition: "center"}}
        />
      </div>
    </div>
  )
}

export default IntroductionGif
