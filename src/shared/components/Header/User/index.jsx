/** imgs */
import user from '@shared/assets/icons/user.svg'
import arrowDropdown from '@shared/assets/icons/arrow-dropdown.svg'

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