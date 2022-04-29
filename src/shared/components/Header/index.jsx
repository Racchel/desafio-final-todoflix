import { Component } from 'react'

/** imgs */
import { routes } from '@shared/routes'

/** style */
import { Container, Vazio } from './styleHeader'

/** components */
import { Logo, Search, User, DropDown, NewMovieButton, LinkHome } from './components'


export class Header extends Component {

  state = {
    isOpenned: false
  }

  handleChange = (value) => {
    this.setState({
      isOpenned: value
    })
  }

  render() {

    return (
      <Container>

        <Logo route={routes[0]} />
        <LinkHome route={routes[0]} />

        <DropDown
          handleChange={this.handleChange}
          isOpenned={this.state.isOpenned}
          routes={routes}
        />

        <Vazio />

        <NewMovieButton />
        <Search />
        <User />

      </Container >
    )
  }
}