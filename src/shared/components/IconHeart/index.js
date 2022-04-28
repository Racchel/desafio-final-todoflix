import { Component } from 'react'

/** contexts */
import { AppContext } from '@shared/contexts'

/** style */
import { Container } from './style'

/** react-icons */
import { AiFillHeart } from 'react-icons/ai'

/** services */
import { MoviesService } from '@shared/services/movies'


export class IconHeart extends Component {

  state = {
    movies: []
  }

  handleClick = async () => {
    const movie = await MoviesService.getById({ id: this.props.id })

    const movieUpdated = {
      ...movie,
      isFavorite: !this.props.isFavorite
    }

    await MoviesService.updateById({ id: this.props.id, data: movieUpdated })

    // const movies = await MoviesService.getAll()
    // this.setState({ movies: movies })
  }

  render() {
    return (
      <AppContext.Consumer>
        {
          context => (
            <Container
              position={this.props.position}
              isFavorite={this.props.isFavorite}
              onClick={() => {
                this.handleClick()
              }}
            >

              <AiFillHeart size={15} />
            </Container>
          )
        }
      </AppContext.Consumer>
    )
  }
}