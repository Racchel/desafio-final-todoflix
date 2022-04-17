import {
  Container,
  ButtonDropDown,
  IconDropDown,
  ListDropDown,
  ItemListDropDown,
  LinkDropDown
} from './style'

/** imgs */
import arrowDropdown from '../../../assets/icons/arrow-dropdown.svg'


export const DropDown = ({ routes, handleChange, isOpenned }) => {
  return (
    <Container onMouseEnter={() => handleChange(true)} onMouseLeave={() => handleChange(false)}>
      <ButtonDropDown>
        Categorias
        <IconDropDown src={arrowDropdown} alt='Icone de seta pra baixo' />
      </ButtonDropDown>

      <ListDropDown isOpenned={isOpenned} >
        {
          routes
            .filter(route => route.path !== '/')
            .map((route => (
              <ItemListDropDown key={route.path}>
                <LinkDropDown to={route.path}>{route.title}</LinkDropDown>
              </ItemListDropDown>
            )))
        }
      </ListDropDown>
    </Container>
  )
}