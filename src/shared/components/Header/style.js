import styled from 'styled-components'

/** theme */
import { Theme } from '../../themes'

/** display flex */
export const flex = 'display: flex; justify-content: center; align-items: center;'
export const height = 'height: 45%; align-self: center;'
export const borderRadius = 'border-radius: 4px;'


/** Container */
export const Container = styled.header`
  grid-template-areas: 'LinkLogo LinkHome LinkMenu vazio NewMovieButton Search User';
  grid-template-columns: 0.7fr 0.5fr 0.5fr 2fr 0.9fr 3fr 0.3fr;
  grid-template-rows: auto;
  margin: 5px 0;
  width: 100%;
  height: 74px;
  display: grid;
  grid-gap: 15px;

  @media (max-width: ${Theme.bk.lg}) {
    grid-template-areas: 'LinkMenu LinkLogo User' 'Search Search Search';
    grid-template-columns: 1.2fr 4fr 1.2fr;
    height: calc(74px * 2 + 10px + 20px );
    grid-template-rows: auto auto;
  }

`

/** Vazio */
export const Vazio = styled.div`
  background: transparent;
  grid-area: vazio;

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`
