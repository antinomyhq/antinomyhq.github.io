import React, {createContext, useContext, useEffect, useState, useRef} from "react"
import {useLocation} from "@docusaurus/router"

type Theme = "light" | "dark" | undefined

interface ThemeContextType {
  theme: Theme | null
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Cookie-based theme storage
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

  // Clear theme cookie
  static clearTheme(): void {
    if (typeof window === "undefined") return

    try {
      document.cookie = `${this.COOKIE_NAME}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT`
    } catch (error) {
      console.warn("Failed to clear theme preference:", error)
    }
  }
}

// Bulletproof theme application
function applyThemeBulletproof(theme: Theme): void {
  if (typeof window === "undefined") return

  // Force remove any existing theme classes first
  document.documentElement.classList.remove("dark", "light", "theme-transition")

  // Apply the correct theme
  if (theme === "dark") {
    document.documentElement.classList.add("dark")
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.classList.add("light")
    document.documentElement.setAttribute("data-theme", "light")
  }

  // Also set CSS custom properties for extra safety
  document.documentElement.style.setProperty("--theme-mode", theme || "dark")
}

// Get initial theme with immediate DOM application
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark"

  // Try to get stored theme from cookie
  const storedTheme = ThemeStorage.getTheme()
  if (storedTheme) {
    applyThemeBulletproof(storedTheme)
    return storedTheme
  }

  // Default to dark theme
  const defaultTheme: Theme = "dark"
  applyThemeBulletproof(defaultTheme)
  ThemeStorage.setTheme(defaultTheme)
  return defaultTheme
}

// Theme Guardian - constantly monitors and fixes theme
class ThemeGuardian {
  private static instance: ThemeGuardian
  private currentTheme: Theme = "dark"
  private isActive = false
  private checkInterval: NodeJS.Timeout | null = null
  private mutationObserver: MutationObserver | null = null

  static getInstance(): ThemeGuardian {
    if (!ThemeGuardian.instance) {
      ThemeGuardian.instance = new ThemeGuardian()
    }
    return ThemeGuardian.instance
  }

  setTheme(theme: Theme): void {
    this.currentTheme = theme
    this.applyTheme()
  }

  private applyTheme(): void {
    applyThemeBulletproof(this.currentTheme)
  }

  startMonitoring(): void {
    if (this.isActive) return
    this.isActive = true

    // Check every 100ms for theme interference
    this.checkInterval = setInterval(() => {
      this.checkAndFixTheme()
    }, 100)

    // Monitor DOM changes that might affect theme
    this.mutationObserver = new MutationObserver((mutations) => {
      let shouldCheck = false
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "class" || mutation.attributeName === "data-theme")
        ) {
          shouldCheck = true
        }
      })

      if (shouldCheck) {
        this.checkAndFixTheme()
      }
    })

    this.mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    })

    // Also monitor for any script that might change theme
    const originalSetAttribute = document.documentElement.setAttribute
    document.documentElement.setAttribute = (name: string, value: string) => {
      if (name === "class" || name === "data-theme") {
        // Allow the change but then immediately fix it
        originalSetAttribute.call(document.documentElement, name, value)
        setTimeout(() => this.checkAndFixTheme(), 0)
      } else {
        originalSetAttribute.call(document.documentElement, name, value)
      }
    }
  }

  stopMonitoring(): void {
    if (!this.isActive) return
    this.isActive = false

    if (this.checkInterval) {
      clearInterval(this.checkInterval)
      this.checkInterval = null
    }

    if (this.mutationObserver) {
      this.mutationObserver.disconnect()
      this.mutationObserver = null
    }
  }

  private checkAndFixTheme(): void {
    const hasDarkClass = document.documentElement.classList.contains("dark")
    const hasLightClass = document.documentElement.classList.contains("light")
    const dataTheme = document.documentElement.getAttribute("data-theme")

    let needsFix = false

    if (this.currentTheme === "dark") {
      if (!hasDarkClass || dataTheme !== "dark") {
        needsFix = true
      }
    } else if (this.currentTheme === "light") {
      if (!hasLightClass || dataTheme !== "light") {
        needsFix = true
      }
    }

    if (needsFix) {
      this.applyTheme()
    }
  }
}

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState<Theme | null>(null)
  const [isClient, setIsClient] = useState(false)
  const location = useLocation()
  const guardianRef = useRef<ThemeGuardian>()

  // Initialize theme on client side
  useEffect(() => {
    setIsClient(true)
    const initialTheme = getInitialTheme()
    setTheme(initialTheme)

    // Initialize and start the theme guardian
    guardianRef.current = ThemeGuardian.getInstance()
    guardianRef.current.setTheme(initialTheme)
    guardianRef.current.startMonitoring()

    // Ensure theme is applied immediately
    document.documentElement.classList.remove("dark", "light")
    if (initialTheme) {
      document.documentElement.classList.add(initialTheme)
      document.documentElement.setAttribute("data-theme", initialTheme)
    }
  }, [])

  // Monitor navigation and ensure theme persists
  useEffect(() => {
    if (theme && guardianRef.current) {
      guardianRef.current.setTheme(theme)
    }
  }, [location.pathname, theme])

  // Add smooth transition styles
  useEffect(() => {
    if (!isClient) return

    const style = document.createElement("style")
    style.textContent = `
      html.theme-transition,
      html.theme-transition *,
      html.theme-transition *:before,
      html.theme-transition *:after {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [isClient])

  // Handle theme changes
  useEffect(() => {
    if (theme && isClient && guardianRef.current) {
      guardianRef.current.setTheme(theme)
      ThemeStorage.setTheme(theme)
    }
  }, [theme, isClient])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (guardianRef.current) {
        guardianRef.current.stopMonitoring()
      }
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light"
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
