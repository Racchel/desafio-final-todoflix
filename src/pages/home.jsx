import React, { Component } from 'react'

/** layouts */
import { BaseLayout } from '@shared/layouts'

/** components */
import { FeaturedMovie, CarouselMovies } from '@shared/components'

/** services */
import { MoviesService } from '@shared/services/movies'

export class Home extends Component {

  state = {
    listMovies: []
  }

  componentDidMount = () => this.getMovies()

  getMovies = async () => {
    const movies = await MoviesService.getAll()
    this.setState({ listMovies: movies })
  }

  render() {
    return (
      <BaseLayout>
        <p>{this.state.value}</p>
        <FeaturedMovie />
        <CarouselMovies />
      </BaseLayout>

    )
  }
}

