import React, { Component } from 'react'

/** layouts */

/** services */
import { MoviesService } from '../shared/services/movies'

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
    // await MoviesService.toggleFavorite({ id: 0 })

    this.setState({
      listMovies: movies
    })

  }

  render() {
    return (
      <>
        <h1>Página inicial</h1>

        <ul>
          {
            this.state.listMovies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))
          }
        </ul>
      </>
    )
  }
}

