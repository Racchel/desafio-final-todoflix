/** imgs */
import search from '../../../assets/icons/search.svg'

/** style */
import { Container, Icon, Input } from './style'

export const Search = () => {
  return (
    <Container>
      <Icon>
        <img src={search} alt='' />
      </Icon>
      <Input placeholder='Pesquisar' />
    </Container>
  )
}