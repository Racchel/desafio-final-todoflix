/** react-icons*/
import { RiArrowDownSFill, RiUserLine } from 'react-icons/ri'

/** style */
import { Container, Content } from './style'


export const User = () => {
  return (
    <Container>
      <Content>
        <RiUserLine color='white' size={20} />
      </Content>
      <RiArrowDownSFill color='white' size={15} />
    </Container>
  )
} 