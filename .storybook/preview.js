// @ts-check
import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as NextImage from 'next/image'
import React from 'react'
//import { AuthProvider } from '../state/auth/AuthContext'
import '../styles/globals.css'

const BREAKPOINTS_INT = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1236,
  xxl: 1536,
}

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val)
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ]
  }),
)

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const decorators = [
  (Story) => (
    //   <AuthProvider>
    <Story />
    //   </AuthProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
