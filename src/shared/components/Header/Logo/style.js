import styled from 'styled-components'
import { Link } from 'react-router-dom'

/** style */
import { flex } from '../style'

export const LinkLogo = styled(Link)`
  grid-area: LinkLogo;
  ${flex};
`

export const Img = styled.img`
  width: 103px;
  height: 40px;
`