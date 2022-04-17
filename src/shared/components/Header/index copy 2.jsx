import styled from 'styled-components'
// import { Link } from 'react-router-dom'

/** imgs */
// import logo from '../../assets/logo.png'
// import user from '../../assets/icons/user.svg'
// import arrowDropdown from '../../assets/icons/arrow-dropdown.svg'

/** imgs */
// import { routes } from '../../routes'

/** theme */
import { Theme } from '../../themes'

/** styled */
const Container = styled.header`
  width: 100%;
  height: 54px;
  background-color: green;
  padding: 0 54px;
  display: grid;
  grid-template-rows: 54px;
  grid-template-columns: 0.7fr 0.5fr 0.5fr 2fr 0.5fr 2fr 0.3fr;
  grid-template-areas: 'LinkLogo LinkHome LinkMenu vazio NewMovieButton Search User';
  grid-gap: 10px;

  @media (max-width: ${Theme.bk.lg}) {
    height: calc(54px * 2 + 10px);
    grid-template-rows: 54px 54px;
    grid-template-columns: 1.2fr 4fr 1.2fr;
    grid-template-areas: 'LinkMenu LinkLogo User' 'Search Search Search';
  }

  @media (max-width: ${Theme.bk.sm}) {
    padding: 0 10px;
  }
`

const LinkLogo = styled.div`
  background: yellow;
  grid-area: LinkLogo;
`
const LinkHome = styled.div`
  background: red;
  grid-area: LinkHome;

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`
const LinkMenu = styled.div`
  background: aquamarine;
  grid-area: LinkMenu;
`
const Vazio = styled.div`
  background: transparent;
  grid-area: vazio;

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`
const NewMovieButton = styled.div`
  background: orange;
  grid-area: NewMovieButton;

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`
const Search = styled.div`
  background: pink;
  grid-area: Search;
`
const User = styled.div`
  background: blue;
  grid-area: User;
`

export const Header = () => {

  return (
    <Container>
      <LinkLogo>LinkLogo</LinkLogo>
      <LinkHome>LinkHome</LinkHome>
      <LinkMenu>LinkMenu</LinkMenu>
      <Vazio />
      <NewMovieButton>NewMovieButton</NewMovieButton>
      <Search>Search</Search>
      <User>User</User>
    </Container>
  )
}