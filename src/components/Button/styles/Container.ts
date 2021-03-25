import styled from 'styled-components'

export const Container = styled.button`
  position: relative;
  z-index: 0;
  height: 48px;
  padding: 0px 15px;
  border-radius: 4px;
  font-family: 'Qanelas', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.grey.default};
`
