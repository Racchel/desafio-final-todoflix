import { Component } from 'react'
import styled from 'styled-components'

/** layouts */
import { BaseLayout } from '@shared/layouts'

/** components */
import { CardMovie } from '@shared/components'

/** services */
import { MoviesService } from '@shared/services/movies'

/** services */
import { Theme } from '@shared/themes'

const Container = styled.div`
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 15px;
  display: grid;
  margin: 40px 0 0 0;

  @media (max-width: ${Theme.bk.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${Theme.bk.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${Theme.bk.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

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
        <Container>
          {this.state.movies.map(movie => <CardMovie movie={movie} />)}
        </Container>
      </BaseLayout>
    )
  }
}
