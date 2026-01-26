import colors from "tailwindcss/colors"

// Theme colors using terminal color palette
export const themeColors = {
  // NextSteps component icons - using terminal colors
  install: "#4ade80", // terminal green
  tutorial: "#fbbf24", // terminal amber
  commands: "#ef4444", // terminal red
  customCommands: "#8b949e", // terminal text secondary
  operatingAgents: "#a78bfa", // terminal purple
  commandsReference: "#22d3ee", // terminal cyan
  customProviders: "#fbbf24", // terminal amber
  advancedConfig: "#4ade80", // terminal green
} as const

export type ThemeColorKey = keyof typeof themeColors
