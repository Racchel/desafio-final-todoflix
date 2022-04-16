import { createGlobalStyle } from 'styled-components'

/** fonts */
import { font } from './fonts'

/** colors */
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${font.family.default};
  }

  body {
    background-color: ${colors.neutral.xl};
    color:  ${colors.neutral.xs};
  }
` 
