export {}

declare module "asciinema-player" {
  export function create(
    src: string,
    element: HTMLElement,
    options?: {
      autoPlay?: boolean
      loop?: boolean
      speed?: number
      theme?: string
      fit?: string
      terminalFontSize?: string
      terminalFontFamily?: string
    },
  ): void
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }

  interface BlogTag {
    label: string
    permalink: string
  }
}
