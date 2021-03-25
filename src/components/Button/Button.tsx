import React from 'react'

import { Container } from './styles'

const Button = React.forwardRef(function Button(
  props: React.ComponentPropsWithoutRef<'button'>,
  ref: React.Ref<HTMLButtonElement>
) {
  const { children, ...rest } = props
  return (
    <Container ref={ref} {...rest}>
      {children}
    </Container>
  )
})

export default React.memo(Button)
