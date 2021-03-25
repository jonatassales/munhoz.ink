import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import theme from './CommonTheme'

export interface DefaultThemeProviderProps {
  children: React.ReactNode
}

function DefaultThemeProvider(props: DefaultThemeProviderProps): React.ReactElement {
  const { children } = props
  const [scrollHidden, setScrollHidden] = React.useState(false)

  return (
    <ThemeProvider
      theme={{
        ...theme,
        scrollHidden,
        setScrollHidden
      }}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default React.memo(DefaultThemeProvider)
