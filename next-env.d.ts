/// <reference types="next" />
/// <reference types="react" />
/// <reference types="react-dom" />

// Temporary type declarations to fix TypeScript errors
declare module 'next/image' {
  import { ComponentProps } from 'react'
  export default function Image(props: ComponentProps<'img'> & {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    sizes?: string
    priority?: boolean
    className?: string
  }): JSX.Element
}

declare module 'next/link' {
  import { ComponentProps, ReactNode } from 'react'
  export default function Link(props: ComponentProps<'a'> & {
    href: string
    children: ReactNode
  }): JSX.Element
}