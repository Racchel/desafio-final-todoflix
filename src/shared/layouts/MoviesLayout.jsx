import { Component } from 'react'

/** layouts */
import { BaseLayout } from '@shared/layouts'

/** services */
import { MoviesService } from '@shared/services/movies'

/** components */
import { CardMovie } from '@shared/components'

/** style */
import { ContainerMoviesLayout } from './style'


export class MoviesLayout extends Component {
  state = {
    movies: []
  }

  fetchData = async () => {
    const data = await MoviesService.getAll()

    let moviesFiltered

    switch (this.props.filter) {
      case 'isFavorite':
        moviesFiltered = data.filter(movie => movie.isFavorite)
        break
      case 'isAdded':
        moviesFiltered = data.filter(movie => movie.isAdded)
        break
      case 'isWatched':
        moviesFiltered = data.filter(movie => movie.isWatched)
        break
      default:
        moviesFiltered = data
    }

    this.setState({ movies: moviesFiltered })
  }

  componentDidMount = () => this.fetchData().catch(console.error)

  render() {
    return (
      <BaseLayout title={this.props.title}>
        <ContainerMoviesLayout>
          {this.state.movies.map(movie => <CardMovie key={movie.id} movie={movie} />)}
        </ContainerMoviesLayout>
      </BaseLayout>
    )
  }
}
