import { LinkLogo, Img } from './style'

/** imgs */
import logo from '@shared/assets/logo.png'

export const Logo = ({ route }) => {
  return (
    <LinkLogo to={route.path}>
      <Img src={logo} alt='TODOFLIX' />
    </LinkLogo>
  )
}