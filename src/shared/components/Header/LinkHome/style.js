import styled from 'styled-components'
import { Link } from 'react-router-dom'

/** theme */
import { Theme } from '../../../themes'

/** style */
import { flex } from '../style'

export const Home = styled(Link)`
  color: ${Theme.colors.neutral.xs};
  grid-area: LinkHome;
  ${flex}

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`
