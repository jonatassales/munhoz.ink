import styled from 'styled-components'

import Button from '@/components/Button'

export const Container = styled(Button)`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.colors.white.default};
  background: #d6249f;
  background: radial-gradient(circle at 30% 170%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.typography.fontSize.text};

  > span {
    font-weight: 600;
  }

  > svg {
    fill: ${({ theme }) => theme.colors.white.default};
  }
`
