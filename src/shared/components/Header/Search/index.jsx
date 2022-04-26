/** imgs */
import { Component } from 'react'
import search from '../../../assets/icons/search.svg'

/** style */
import { Container, Icon, Input } from './style'

/** contexts */
import { AppContext } from '@shared/contexts'


export class Search extends Component {

  render() {
    return (
      <AppContext.Consumer>
        {
          context => (
            <Container >
              <Icon>
                <img src={search} alt='' />
              </Icon>
              <Input
                value={context.state.searchValue}
                placeholder='Pesquisar'
                onChange={(e) => context.setSearchValue(e.target.value)}
              />
            </Container>
          )

        }
      </AppContext.Consumer>
    )
  }
}