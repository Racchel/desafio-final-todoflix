/** styled */
import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

/** style */
import { height } from '../styleHeader'

export const Container = styled.button`
  background-color: transparent;
  align-items: center;
  cursor: pointer;
  grid-area: User;
  display: flex;
  border: none;
  ${height};

  @media (max-width: ${Theme.bk.lg}) {
    justify-content: end;
  }
`

export const Content = styled.div`
  background-color: ${Theme.colors.userIcon};
  padding: 5px;
`

