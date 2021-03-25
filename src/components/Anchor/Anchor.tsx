import React from 'react'

import { Container } from './styles'

const Anchor = React.forwardRef(function Link(
  props: React.ComponentPropsWithoutRef<'a'>,
  ref: React.Ref<HTMLAnchorElement>
) {
  const { children, ...rest } = props
  return (
    <Container ref={ref} {...rest}>
      {children}
    </Container>
  )
})

export default React.memo(Anchor)
