import styled from 'styled-components'

import { SocialButtons } from './SocialButtons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    padding-top: 80px;
    justify-content: flex-start;
  }

  color: ${({ theme }) => theme.colors.white.default};
  background: ${({ theme }) => theme.colors.black.default};
  height: 100vh;
  width: 100vw;

  ${SocialButtons} {
    margin-top: 40px;
    @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
      margin-top: 80px;
    }
  }

  > button {
    justify-self: center;
  }
`
