import React from "react"
import {useThemeContext} from "@site/src/theme/ThemeProvider/ThemeProvider"
import {analyticsHandler} from "@site/src/utils"
import {MoonStar, Sun} from "lucide-react"

const ThemeToggle: React.FC = () => {
  const {theme, toggleTheme} = useThemeContext()

  const handleToggleTheme = () => {
    analyticsHandler("Home Page", "Click", "Theme Toggle")

    toggleTheme()
  }

  return (
    <button
      onClick={handleToggleTheme}
      aria-label="Toggle Theme"
      className="
        flex items-center justify-center
        p-[1px] border-none rounded-[0px] cursor-pointer bg-transparent
      "
    >
      <div className="bg-tailCall-light-1200 dark:bg-black p-[6px] rounded-md flex items-center justify-center border border-solid border-[--docsearch-brand-color]">
        {theme !== "light" ? (
          <MoonStar className="text-tailCall-lightMode---primary-700 dark:text-tailCall-lightMode---primary-400" />
        ) : (
          <Sun className="text-tailCall-lightMode---primary-700 dark:text-tailCall-lightMode---primary-400" />
        )}
      </div>
    </button>
  )
}

export default ThemeToggle
