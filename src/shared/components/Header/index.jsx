import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

/** imgs */
import logo from '../../assets/logo.png'
import user from '../../assets/icons/user.svg'
import arrowDropdown from '../../assets/icons/arrow-dropdown.svg'

/** imgs */
import { routes } from '../../routes'

/** theme */
import { Theme } from '../../themes'

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
  grid-gap: 10px;

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
/** SelectMenu */
const SelectMenu = styled.select`
  background-color: ${Theme.colors.neutral.xl};
  color: ${Theme.colors.neutral.xs};
  grid-area: LinkMenu;
  display: block;
  border: none;
  ${height};
  ${flex};

  box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;

  :focus, :hover, :active {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`

const OptionMenu = styled.option``

const MenuMobile = styled.p`
  grid-area: LinkMenu;
  display: none;
  color: white;
  ${height};
  ${flex};

  @media (max-width: ${Theme.bk.lg}) {
    display: block;
  }
`

// const LinkMenu = styled(Link)`
//   color: ${Theme.colors.neutral.xs};
// `

/** Vazio */
const Vazio = styled.div`
  background: transparent;
  grid-area: vazio;

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`

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
const Search = styled.input`
  background-color: ${Theme.colors.neutral.lg};
  color: ${Theme.colors.neutral.xs};
  grid-area: Search;
  padding: 8px 14px;
  ${borderRadius};
  border: none;
  ${height};

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
  let navigate = useNavigate()

  const handleChange = (value) => {
    navigate(`${value}`)
    value = ''
  }

  return (
    <Container>
      <LinkLogo to={routes[0].path}>
        <Logo src={logo} alt='TODOFLIX' />
      </LinkLogo>

      <LinkHome to={routes[0].path}>{routes[0].title}</LinkHome>

      <MenuMobile>oiiiii</MenuMobile>

      <SelectMenu onChange={e => handleChange(e.target.value)}>
        <OptionMenu disabled selected hidden>Categorias</OptionMenu>
        {
          routes
            .filter(route => route.path !== '/')
            .map((route => (
              <OptionMenu key={route.path} value={route.path}>
                {route.title}
              </OptionMenu>
            )))
        }
      </SelectMenu>

      <Vazio />

      <NewMovieButton> Adicionar filme</NewMovieButton>
      <Search placeholder='Pesquisar' />

      <UserButton>
        <UserIcon src={user} alt='' />
        <ArrowDropdownIcon src={arrowDropdown} alt='' />
      </UserButton>
    </Container>
  )
}