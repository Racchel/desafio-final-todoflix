import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  width: 100%;
  min-height: 54px;
  padding: 20px 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${Theme.bk.lg}) {
    flex-direction: column;
  }
`

const Content = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${Theme.bk.lg}) {
    width: 100%;
  }
`

const Logo = styled.img`
  width: 103px;
  height: 40px;
`

const LinkLogo = styled(Link)`
  @media (max-width: ${Theme.bk.lg}) {
    width: 100%;
    text-align: center;
  }
`

const LinkMenu = styled(Link)`
  color: ${Theme.colors.neutral.xs};

  @media (max-width: ${Theme.bk.lg}) {
    display: ${props => props.to === '/' ? 'none' : 'block'};
  }
`

const NewMovieButton = styled.button`
  background-color: ${Theme.colors.primary};
  color: ${Theme.colors.neutral.xs};
  border: none;
  padding: 8px;
  border-radius: 4px;
  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`
const Search = styled.input`
  width: 400px;
  height: 32px;
  background-color: ${Theme.colors.neutral.lg};
  border: none;

  border-radius: 4px;
  padding: 8px 14px;
  color: ${Theme.colors.neutral.xs};

  ::placeholder {
    color: ${Theme.colors.neutral.xs};
  }

  @media (max-width: ${Theme.bk.lg}) {
    display: none;
  }
`
const UserButton = styled.button`
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserIcon = styled.img`
  height: 32px;
  height: 100%;
`

const ArrowDropdownIcon = styled.img`
  
`

const User = () => {
  return (
    <UserButton>
      <UserIcon src={user} alt='' />
      <ArrowDropdownIcon src={arrowDropdown} alt='' />
    </UserButton>
  )
}

export const Header = () => {

  return (
    <Container>

      <LinkLogo to={routes[0].path}>
        <Logo src={logo} alt='TODOFLIX' />
      </LinkLogo>

      <Content >

        <LinkMenu to={routes[0].path}>{routes[0].title}</LinkMenu>

        <select>
          <option disabled selected hidden>Categorias</option>
          {
            routes
              .filter(route => route.path !== '/')
              .map((route => (
                <option key={route.path} value={route.path}>
                  <LinkMenu to={route.path}>{route.title}</LinkMenu>
                </option>
              )))
          }
        </select>

        <NewMovieButton> Adicionar filme</NewMovieButton>
        <Search placeholder='Pesquisar' />
        <User />
      </Content>
    </Container>
  )
}