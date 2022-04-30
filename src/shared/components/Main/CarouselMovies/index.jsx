import { Component } from 'react'

/** services */
import { MoviesService } from '@shared/services/movies'

/** components */
import { CardMovie } from '@shared/components'

/** libs */
import Carousel from 'nuka-carousel'

/** config */
import { carouselConfig } from './config'


export class CarouselMovies extends Component {
  state = {
    movies: []
  }

  fetchData = async () => {
    const data = await MoviesService.getAll()
    const moviesFiltered = data.filter(movie => movie.isAdded)
    this.setState({ movies: moviesFiltered })
  }

  componentDidMount = () => this.fetchData().catch(console.error)

  render() {
    return (
      <Carousel {...carouselConfig}>
        {this.state.movies.map(movie => <CardMovie key={movie.id} movie={movie} />)}
      </Carousel>
    )
  }
}