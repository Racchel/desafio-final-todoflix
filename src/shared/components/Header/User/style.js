import styled from 'styled-components'

/** theme */
import { Theme } from '../../../themes'

/** style */
import { height } from '../style'

export const UserButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-area: User;
  ${height};

  @media (max-width: ${Theme.bk.lg}) {
    justify-content: end;
  }
`

export const UserIcon = styled.img`
  height: 32px;
`