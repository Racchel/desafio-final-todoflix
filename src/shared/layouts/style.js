import styled from 'styled-components'

/** theme */
import { Theme } from '../themes'

/** styled */
export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 0 54px;

  @media (max-width: ${Theme.bk.sm}) {
    padding: 0 20px;
  }
`