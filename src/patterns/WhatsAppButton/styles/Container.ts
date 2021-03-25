import styled from 'styled-components'

import Button from '@/components/Button'

export const Container = styled(Button)`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.colors.white.default};
  background-color: #20ba59;
  font-size: ${({ theme }) => theme.typography.fontSize.text};

  > span {
    font-weight: 600;
  }

  > svg {
    fill: ${({ theme }) => theme.colors.white.default};
  }
`
