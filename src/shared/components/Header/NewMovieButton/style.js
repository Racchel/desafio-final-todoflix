/** styled */
import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

/** style */
import { height, borderRadius } from '../styleHeader'

export const Button = styled.button`
  background-color: ${Theme.colors.primary};
  color: ${Theme.colors.neutral.xs};
  grid-area: NewMovieButton;
  transition: 0.5s;
  cursor: pointer;
  ${borderRadius}
  border: none;
  padding: 8px;
  ${height};

  :hover {
    box-shadow: ${Theme.colors.shadow};
  }

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`