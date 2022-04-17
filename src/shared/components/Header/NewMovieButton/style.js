import styled from 'styled-components'

/** theme */
import { Theme } from '../../../themes'

/** style */
import { height, borderRadius } from '../style'

export const Button = styled.button`
  background-color: ${Theme.colors.primary};
  color: ${Theme.colors.neutral.xs};
  grid-area: NewMovieButton;
  ${borderRadius}
  border: none;
  padding: 8px;
  ${height};

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`