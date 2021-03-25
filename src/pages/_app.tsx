import React from 'react'
import { AppProps } from 'next/app'

import { MediaContextProvider } from '@/infra/fresnel/devices'

import DefaultThemeProvider from '@/theme/DefaultThemeProvider'

function App(props: AppProps): React.ReactElement {
  const { Component, pageProps } = props
  return (
    <DefaultThemeProvider>
      <MediaContextProvider>
        <Component {...pageProps} />
      </MediaContextProvider>
    </DefaultThemeProvider>
  )
}

export default App
