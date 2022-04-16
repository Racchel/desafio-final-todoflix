import styled from 'styled-components'
import { Link } from 'react-router-dom'

/** imgs */
import logo from '../../assets/logo.png'

/** imgs */
import { routes } from '../../routes'


/** theme */
import { Theme } from '../../themes'

/** styled */
const Container = styled.header`
  width: ${Theme.sizes.header._w};
  height: ${Theme.sizes.header._h};
  padding: ${Theme.sizes.header._p};
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  width: ${Theme.sizes.logo._w};
  height: ${Theme.sizes.logo._h};
`

export const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt='TODOFLIX' />

      {/** link da página inicial */}
      <Link to={routes[0].path}>{routes[0].title}</Link>

      {/** select com todos os outros links de outras páginas*/}
      <select>
        <option value='categorias'>Categorias</option>
        {
          routes
            .filter(route => route.path !== '/')
            .map((route => (
              <option key={route.path} value={route.path}>
                <Link to={route.path}>{route.title}</Link>
              </option>
            )))
        }
      </select>

    </Container>
  )
}