import React, {createContext, useContext, useEffect, useState} from "react"
import {useLocation} from "@docusaurus/router"

type Theme = "light" | "dark" | undefined

interface ThemeContextType {
  theme: Theme | null
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Simplified cookie-based theme storage
class ThemeStorage {
  private static COOKIE_NAME = "theme-preference"

  // Set theme in cookie
  static setTheme(theme: Theme): void {
    if (typeof window === "undefined" || !theme) return

    try {
      document.cookie = `${this.COOKIE_NAME}=${theme};path=/;max-age=31536000;SameSite=Strict`
    } catch (error) {
      console.warn("Failed to save theme preference:", error)
    }
  }

  // Get theme from cookie
  static getTheme(): Theme | null {
    if (typeof window === "undefined") return null

    try {
      const cookies = document.cookie.split(";")
      const themeCookie = cookies.find((cookie) => cookie.trim().startsWith(`${this.COOKIE_NAME}=`))
      if (themeCookie) {
        const theme = themeCookie.split("=")[1] as Theme
        if (theme === "dark" || theme === "light") {
          return theme
        }
      }
      return null
    } catch (error) {
      console.warn("Failed to read theme preference:", error)
      return null
    }
  }
}

// Simplified theme application - the blocking script handles the heavy lifting
function applyTheme(theme: Theme): void {
  if (typeof window === "undefined" || !theme) return

  try {
    // Remove conflicting classes
    document.documentElement.classList.remove("dark", "light")

    // Apply the correct theme
    document.documentElement.classList.add(theme)
    document.documentElement.setAttribute("data-theme", theme)

    // Set CSS custom properties
    document.documentElement.style.setProperty("--theme-mode", theme)
    document.documentElement.style.setProperty("--ifm-color-mode", theme)
  } catch (error) {
    console.warn("Failed to apply theme:", error)
  }
}

// Get initial theme
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark"

  // Try to get stored theme from cookie
  const storedTheme = ThemeStorage.getTheme()
  if (storedTheme) {
    return storedTheme
  }

  // Default to dark theme
  return "dark"
}

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState<Theme | null>(null)
  const [isClient, setIsClient] = useState(false)
  const location = useLocation()

  // Initialize theme on client side
  useEffect(() => {
    setIsClient(true)
    const initialTheme = getInitialTheme()
    setTheme(initialTheme)

    // Apply theme immediately (blocking script should have already done this)
    applyTheme(initialTheme)
  }, [])

  // Handle theme changes
  useEffect(() => {
    if (theme && isClient) {
      applyTheme(theme)
      ThemeStorage.setTheme(theme)

      // Trigger a custom event for other components that might need to know
      window.dispatchEvent(new CustomEvent("themeChange", {detail: {theme}}))
    }
  }, [theme, isClient])

  // Monitor navigation and ensure theme persists
  useEffect(() => {
    if (theme && isClient) {
      // Reapply theme on navigation to ensure consistency
      applyTheme(theme)
    }
  }, [location.pathname, theme])

  // Add smooth transition styles
  useEffect(() => {
    if (!isClient) return

    const style = document.createElement("style")
    style.id = "theme-transitions"
    style.textContent = `
      html.theme-transition,
      html.theme-transition *,
      html.theme-transition *:before,
      html.theme-transition *:after {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
      }
    `

    // Only add if not already present
    if (!document.getElementById("theme-transitions")) {
      document.head.appendChild(style)
    }

    return () => {
      const existingStyle = document.getElementById("theme-transitions")
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [isClient])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light"

      // Add transition class temporarily
      document.documentElement.classList.add("theme-transition")
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition")
      }, 300)

      return next
    })
  }

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider")
  }
  return context
}
