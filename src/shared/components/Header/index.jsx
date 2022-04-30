import { Component } from 'react'

/** routes */
import { routes } from '@shared/routes'

/** components */
import {
  NewMovieButton,
  DropDown,
  LinkHome,
  Search,
  Logo,
  User
} from './components'

/** style */
import { Container, Vazio } from './styleHeader'


export class Header extends Component {
  state = {
    isOpenned: false
  }

  handleChange = (value) => {
    this.setState({ isOpenned: value })
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