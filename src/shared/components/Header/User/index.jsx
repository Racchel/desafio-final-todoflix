/** imgs */
import user from '../../../assets/icons/user.svg'
import arrowDropdown from '../../../assets/icons/arrow-dropdown.svg'

/** style */
import { Container, Icon } from './style'

export const User = () => {
  return (
    <Container>
      <Icon src={user} alt='' />
      <img src={arrowDropdown} alt='' />
    </Container>
  )
} 