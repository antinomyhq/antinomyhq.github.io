import colors from "tailwindcss/colors"

// Theme colors using Tailwind's color palette
export const themeColors = {
  // NextSteps component icons
  install: colors.violet[500],
  tutorial: colors.amber[500],
  commands: colors.red[500],
  customCommands: colors.gray[500],
  operatingAgents: colors.violet[500],
  commandsReference: colors.blue[500],
  customProviders: colors.amber[500],
  advancedConfig: colors.emerald[500],
} as const

export type ThemeColorKey = keyof typeof themeColors
