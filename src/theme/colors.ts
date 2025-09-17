import colors from 'tailwindcss/colors'

// Theme colors using Tailwind's color palette
export const themeColors = {
  // NextSteps component icons
  install: colors.violet[500],        // #8b5cf6
  tutorial: colors.amber[500],        // #f59e0b
  commands: colors.red[500],          // #ef4444
} as const

export type ThemeColorKey = keyof typeof themeColors
