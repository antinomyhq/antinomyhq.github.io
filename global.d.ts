export {}

// Re-export React.JSX as global JSX namespace for @types/react@19 compatibility
declare global {
  /** @deprecated Use `React.JSX` instead of the global `JSX` namespace. */
  namespace JSX {
    type ElementType = React.JSX.ElementType
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends React.JSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
}

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
