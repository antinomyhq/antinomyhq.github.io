import colors from "tailwindcss/colors"

// Theme colors using Tailwind's color palette
export const themeColors = {
  // NextSteps component icons
  install: colors.violet[500], // #8b5cf6
  tutorial: colors.amber[500], // #f59e0b
  commands: colors.red[500], // #ef4444
  customCommands: colors.gray[500], // #6b7280
  operatingAgents: colors.violet[500], // #8b5cf6
  commandsReference: colors.gray[800], // #1f2937
  customProviders: colors.amber[500], // #f59e0b
  advancedConfig: colors.emerald[500], // #10b981
} as const

export type ThemeColorKey = keyof typeof themeColors
