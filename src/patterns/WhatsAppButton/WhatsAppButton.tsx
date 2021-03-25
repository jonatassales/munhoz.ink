import WhatsAppIcon from '@/components/WhatsAppIcon'
import React from 'react'

import { Container } from './styles'

interface WhatsAppButtonProps {
  children: React.ReactNode
}

function WhatsAppButton(props: WhatsAppButtonProps): React.ReactElement {
  const { children } = props
  return (
    <Container>
      <WhatsAppIcon />
      <span>{children}</span>
    </Container>
  )
}

export default React.memo(WhatsAppButton)
