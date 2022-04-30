/** react-icons*/
import { RiArrowDownSFill } from 'react-icons/ri'

/** style */
import {
  Container,
  Button,
  List,
  ItemList,
  LinkDropDown
} from './style'


export const DropDown = ({
  handleChange,
  isOpenned,
  routes
}) => {

  return (
    <Container onMouseEnter={() => handleChange(true)} onMouseLeave={() => handleChange(false)}>
      <Button>
        Categorias
        <RiArrowDownSFill />
      </Button>

      <List isOpenned={isOpenned} >
        {routes
          .filter(route => route.path !== '/')
          .map((route => (
            <ItemList key={route.path}>
              <LinkDropDown to={route.path}>{route.title}</LinkDropDown>
            </ItemList>
          )))}
      </List>
    </Container >
  )
}