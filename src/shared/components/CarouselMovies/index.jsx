import { Component } from 'react'

/** libs */
import Carousel from 'nuka-carousel'

/** services */
import { MoviesService } from '@shared/services/movies'

/** components */
import { CardMovie } from '..'

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
        {this.state.movies.map(movie => <CardMovie movie={movie} />)}
      </Carousel>
    )
  }
}