import styled from 'styled-components'
import { Link } from 'react-router-dom'

/** theme */
import { Theme } from '../../../themes'

/** style */
import { flex, height } from '../style'

export const Container = styled.nav`
  color: ${Theme.colors.neutral.xs};
  flex-direction: column;
  grid-area: LinkMenu;
  position: relative;
  display: block;
  border: none;
  ${height};
  ${flex};
  
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
  background-color: ${Theme.colors.neutral.xl};
  position: absolute;
  padding: 10px 0;
  width: 150px;
  top: 30px;
  left: 0;
`

export const ItemList = styled.li`
  padding: 3px;

  :hover {
    background-color: ${Theme.colors.primary};
  }
`

export const LinkDropDown = styled(Link)`
  color: ${Theme.colors.neutral.xs};
  font-size: ${Theme.font.size.xs};
  display: flex;
`

