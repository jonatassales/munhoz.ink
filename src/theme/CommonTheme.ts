export const Colors = {
  primary: {
    dark: '#0452AF',
    default: '#009afa',
    light: '#e4f4ff'
  },
  secondary: {
    default: '#f59e0a'
  },
  black: {
    dark: '#1C1C1C',
    default: '#020204'
  },
  white: {
    default: '#FFFFFF'
  },
  grey: {
    darkest: '#4C4C4C',
    darker: '#707070',
    dark: '#B9B9B9',
    default: 'rgb(250, 250, 250)',
    light: '#D8D8D8'
  }
}

export enum FontSize {
  textSmall = '12px',
  text = '18px',
  titleSmall = '32px',
  title = '48px'
}

export enum Devices {
  mobile = '480px',
  tablet = '897px',
  laptop = '1224px',
  desktop = '1439px'
}

const theme = {
  colors: Colors,
  devices: Devices,
  typography: {
    fontSize: FontSize
  },
  scrollHidden: false,
  setScrollHidden: null
}

export type Theme = typeof theme

export type WithTheme = {
  theme: Theme
}

export default theme
