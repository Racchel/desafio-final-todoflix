import {
  Container,
  Button,
  Icon,
  List,
  ItemList,
  LinkDropDown
} from './style'

/** imgs */
import arrowDropdown from '@shared/assets/icons/arrow-dropdown.svg'


export const DropDown = ({
  handleChange,
  isOpenned,
  routes
}) => {

  return (
    <Container onMouseEnter={() => handleChange(true)} onMouseLeave={() => handleChange(false)}>
      <Button>
        Categorias
        <Icon src={arrowDropdown} alt='Icone de seta pra baixo' />
      </Button>

      <List isOpenned={isOpenned} >
        {
          routes
            .filter(route => route.path !== '/')
            .map((route => (
              <ItemList key={route.path}>
                <LinkDropDown to={route.path}>{route.title}</LinkDropDown>
              </ItemList>
            )))
        }
      </List>
    </Container >
  )
}