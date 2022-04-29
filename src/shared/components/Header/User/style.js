import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

/** style */
import { height } from '../styleHeader'

export const Container = styled.button`
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

export const Icon = styled.img`
  height: 32px;
`