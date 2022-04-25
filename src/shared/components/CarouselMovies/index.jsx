import { Component } from 'react'
import Carousel from 'nuka-carousel'

/** services */
import { MoviesService } from '@shared/services/movies'

/** style */
import { Img } from './style'

export class CarouselMovies extends Component {

  state = {
    movies: []
  }

  fetchData = async () => {
    const data = await MoviesService.getAll()

    this.setState({
      movies: data
    })
  }

  componentDidMount() {
    this.fetchData()
      .catch(console.error)
  }

  render() {
    return (
      <Carousel
        autoplay={true}
        autoplayInterval={2000}
        wrapAround={true}
        slidesToShow={5}
      >
        {
          this.state.movies.map(movie => (
            <Img key={movie.id} src={movie.image} />
          ))
        }


      </Carousel>
    )
  }
}