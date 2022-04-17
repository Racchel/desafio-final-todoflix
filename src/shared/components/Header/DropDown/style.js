import styled from 'styled-components'
import { Link } from 'react-router-dom'

/** theme */
import { Theme } from '../../../themes'

/** style */
import { flex, height } from '../style'

export const Container = styled.nav`
  color: ${Theme.colors.neutral.xs};
  grid-area: LinkMenu;
  display: block;
  border: none;
  ${height};
  ${flex};
  flex-direction: column;
  position: relative;
  
  @media (max-width: ${Theme.bk.lg}) {
    align-items: start;
  }
`

export const Button = styled.button`
  color: ${Theme.colors.neutral.xs};
  background-color: transparent;
  border: none;
  ${flex};
`

export const Icon = styled.img``

export const List = styled.ul`
  display: ${props => props.isOpenned ? 'block' : 'none'};
  position: absolute;
  width: 150px;
  top: 30px;
  left: 0;
  padding: 10px 0;
  background-color: ${Theme.colors.neutral.xl};
`

export const ItemList = styled.li`
  flex-direction: column;
  padding: 3px;

  :hover {
    background-color: ${Theme.colors.primary};
  }
`

export const LinkDropDown = styled(Link)`
  color: ${Theme.colors.neutral.xs};
  font-size: ${Theme.font.size.xs};
`

