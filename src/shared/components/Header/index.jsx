import styled from 'styled-components'
import { Link } from 'react-router-dom'

/** imgs */
import logo from '../../assets/logo.png'
import user from '../../assets/icons/user.svg'
import search from '../../assets/icons/search.svg'
import arrowDropdown from '../../assets/icons/arrow-dropdown.svg'

/** imgs */
import { routes } from '../../routes'

/** theme */
import { Theme } from '../../themes'
import { useState } from 'react'

/** styled */
const Container = styled.header`
  grid-template-areas: 'LinkLogo LinkHome LinkMenu vazio NewMovieButton Search User';
  grid-template-columns: 0.7fr 0.5fr 0.5fr 2fr 0.9fr 3fr 0.3fr;
  grid-template-rows: auto;
  margin: 5px 0;
  padding: 0 54px;
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

  @media (max-width: ${Theme.bk.sm}) {
    padding: 0 10px;
  }
`
/** display flex */
const flex = 'display: flex; justify-content: center; align-items: center;'
const height = 'height: 45%; align-self: center;'
const borderRadius = 'border-radius: 4px;'

/** LinkLogo */
const LinkLogo = styled(Link)`
  grid-area: LinkLogo;
  ${flex}
`

const Logo = styled.img`
  width: 103px;
  height: 40px;
`

/** LinkHome */
const LinkHome = styled(Link)`
  color: ${Theme.colors.neutral.xs};
  grid-area: LinkHome;
  ${flex}

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`

/** Vazio */
const Vazio = styled.div`
  background: transparent;
  grid-area: vazio;

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`
/** LinkMenu */
const DropDown = styled.nav`
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

const ListDropDown = styled.ul`
  display: ${props => props.isOpenned ? 'block' : 'none'};
  position: absolute;
  width: 150px;
  top: 30px;
  left: 0;
  padding: 10px 0;
  background-color: ${Theme.colors.neutral.xl};
`

const ItemListDropDown = styled.li`
  flex-direction: column;
  padding: 3px;

  :hover {
    background-color: ${Theme.colors.primary};
  }
`

const LinkDropDown = styled(Link)`
  color: ${Theme.colors.neutral.xs};
  font-size: ${Theme.font.size.xs};
`

const ButtonDropDown = styled.button`
  color: ${Theme.colors.neutral.xs};
  background-color: transparent;
  border: none;
  ${flex};
`

const IconDropDown = styled.img``

/** NewMovieButton */
const NewMovieButton = styled.button`
  background-color: ${Theme.colors.primary};
  color: ${Theme.colors.neutral.xs};
  grid-area: NewMovieButton;
  ${borderRadius}
  border: none;
  padding: 8px;
  ${height};

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`

/** Search */
const Search = styled.div`
  grid-area: Search;
  ${height};
  ${flex};
`

const SearchIcon = styled.button`
  background-color: ${Theme.colors.neutral.lg};
  height: 100%;
  width: 40px;
  border: none;
  border-radius: 4px 0 0 4px;
  ${flex};
`

const InputSearch = styled.input`
  height: 100%;
  width: 100%;
  background-color: ${Theme.colors.neutral.lg};
  color: ${Theme.colors.neutral.xs};
  padding: 8px 14px 8px 0;
  border-radius: 0 4px 4px 0;
  border: none;
  outline: none;

  @media (max-width: ${Theme.bk.lg}) {
    padding: 20px 14px;
  }
`

/** UserButton */
const UserButton = styled.button`
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

const UserIcon = styled.img`
  height: 32px;
`

const ArrowDropdownIcon = styled.img``


export const Header = () => {
  const [isOpenned, setIsOpenned] = useState(false)

  const handleChange = (value) => {
    setIsOpenned(value)
  }

  return (
    <Container>
      <LinkLogo to={routes[0].path}>
        <Logo src={logo} alt='TODOFLIX' />
      </LinkLogo>

      <LinkHome to={routes[0].path}>{routes[0].title}</LinkHome>

      <DropDown onMouseEnter={() => handleChange(true)} onMouseLeave={() => handleChange(false)}>
        <ButtonDropDown>
          Categorias
          <IconDropDown src={arrowDropdown} alt='Icone de seta pra baixo' />
        </ButtonDropDown>

        <ListDropDown isOpenned={isOpenned} >
          {
            routes
              .filter(route => route.path !== '/')
              .map((route => (
                <ItemListDropDown key={route.path}>
                  <LinkDropDown to={route.path}>{route.title}</LinkDropDown>
                </ItemListDropDown>
              )))
          }
        </ListDropDown>
      </DropDown>


      <Vazio />

      <NewMovieButton> Adicionar filme</NewMovieButton>

      <Search>
        <SearchIcon>
          <img src={search} alt='' />
        </SearchIcon>
        <InputSearch placeholder='Pesquisar' />
      </Search>

      <UserButton>
        <UserIcon src={user} alt='' />
        <ArrowDropdownIcon src={arrowDropdown} alt='' />
      </UserButton>
    </Container>
  )
}