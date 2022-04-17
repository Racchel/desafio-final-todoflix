import React, { Component } from 'react'

/** layouts */
import { BaseLayout } from '@shared/layouts'

/** services */
import { MoviesService } from '@shared/services/movies'

/** utils */

export class Home extends Component {

  state = {
    listMovies: []
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const movies = await MoviesService.getAll()

    this.setState({
      listMovies: movies
    })

  }

  render() {
    return (
      <BaseLayout title='Página inicial'>

        <ul>
          {
            this.state.listMovies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))
          }
        </ul>
      </BaseLayout>
    )
  }
}

