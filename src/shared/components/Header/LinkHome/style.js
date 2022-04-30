import { Link } from 'react-router-dom'

/** styled */
import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

/** style */
import { flex } from '../styleHeader'

export const Home = styled(Link)`
  color: ${Theme.colors.neutral.xs};
  grid-area: LinkHome;
  ${flex}

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`
