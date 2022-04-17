import { useState } from 'react'

/** imgs */
import { routes } from '../../routes'

/** style */
import { Container, Vazio } from './style'

/** components */
import { Logo, Search, User, DropDown, NewMovieButton, LinkHome } from './components'


export const Header = () => {
  const [isOpenned, setIsOpenned] = useState(false)

  const handleChange = (value) => {
    setIsOpenned(value)
  }
  return (
    <Container>

      <Logo route={routes[0]} />
      <LinkHome route={routes[0]} />

      <DropDown
        handleChange={handleChange}
        isOpenned={isOpenned}
        routes={routes}
      />

      <Vazio />

      <NewMovieButton />
      <Search />
      <User />

    </Container>
  )
}