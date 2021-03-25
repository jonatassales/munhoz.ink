import React from 'react'
import { createMedia } from '@artsy/fresnel'

import { Devices } from '@/theme/CommonTheme'

const AppMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: parseInt(Devices.mobile),
    lg: parseInt(Devices.tablet),
    xl: parseInt(Devices.laptop)
  }
})

export const mediaStyles = AppMedia.createMediaStyle()

export const { Media, MediaContextProvider } = AppMedia

interface MediaProps {
  children: React.ReactNode
}

export function Mobile(props: MediaProps): React.ReactElement {
  const { children } = props
  return <Media at="sm">{children}</Media>
}

export function Tablet(props: MediaProps): React.ReactElement {
  const { children } = props
  return <Media lessThan="lg">{children}</Media>
}

export function Laptop(props: MediaProps): React.ReactElement {
  const { children } = props
  return <Media greaterThanOrEqual="lg">{children}</Media>
}
