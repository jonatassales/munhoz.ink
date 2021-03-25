import InstagramIcon from '@/components/InstagramIcon'
import React from 'react'

import { Container } from './styles'

interface InstagramButtonProps {
  children: React.ReactNode
}

function InstagramButton(props: InstagramButtonProps): React.ReactElement {
  const { children } = props
  return (
    <Container>
      <InstagramIcon />
      <span>{children}</span>
    </Container>
  )
}

export default React.memo(InstagramButton)
