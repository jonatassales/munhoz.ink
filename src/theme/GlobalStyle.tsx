import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    font-family: 'Qanelas', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    text-rendering: optimizelegibility;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    appearance: none;
    text-size-adjust: 100%;
    text-rendering: optimizelegibility;
    border-color: initial;
    border-image: initial;
    border-style: initial;
    border-width: 0px;
    outline: 0px;
  }

  body {
    ${({ theme }) => theme.scrollHidden && 'overflow-y: hidden;'}
    overflow-x: hidden;
  }
`
