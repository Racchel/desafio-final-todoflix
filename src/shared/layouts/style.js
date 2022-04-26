import styled from 'styled-components'

/** theme */
import { Theme } from '../themes'

/** styled */
export const ContainerBaseLayout = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 0 54px;

  @media (max-width: ${Theme.bk.sm}) {
    padding: 0 20px;
  }
`

export const ContainerMoviesLayout = styled.div`
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 15px;
  display: grid;
  margin: 40px 0 0 0;

  @media (max-width: ${Theme.bk.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${Theme.bk.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${Theme.bk.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
