import { Link } from 'react-router-dom'

/** styled */
import styled from 'styled-components'

/** style */
import { flex } from '../styleHeader'

export const LinkLogo = styled(Link)`
  grid-area: LinkLogo;
  ${flex};
`

export const Img = styled.img`
  width: 103px;
  height: 40px;
`