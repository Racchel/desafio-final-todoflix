/** imgs */
import user from '../../../assets/icons/user.svg'
import arrowDropdown from '../../../assets/icons/arrow-dropdown.svg'

/** style */
import { UserButton, UserIcon } from './style'

export const User = () => {
  return (
    <UserButton>
      <UserIcon src={user} alt='' />
      <img src={arrowDropdown} alt='' />
    </UserButton>
  )
} 