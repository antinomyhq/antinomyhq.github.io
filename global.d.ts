export {}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }

  interface BlogTag {
    label: string
    permalink: string
  }
}