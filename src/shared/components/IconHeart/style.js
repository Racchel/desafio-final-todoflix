import styled from 'styled-components'

/** theme */
import { Theme } from '../../themes'

export const Container = styled.svg`
  position: absolute;
  cursor: pointer;
  height: auto;
  width: 20px;
  right: 10px;
  top: 10px;

  :hover path {
    fill: ${Theme.colors.neutral.xs};
  }
`
