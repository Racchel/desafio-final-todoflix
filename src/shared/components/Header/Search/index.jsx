import { Component } from 'react'

/** contexts */
import { AppContext } from '@shared/contexts'

/** services */
import { MoviesService } from '@shared/services/movies'

/** imgs */
import search from '../../../assets/icons/search.svg'

/** style */
import { Container, Icon, Input } from './style'

export class Search extends Component {
  state = {
    movies: [],
    moviesFiltered: [],
    searchValue: ''
  }

  fetchData = async () => {
    const data = await MoviesService.getAll()
    this.setState({ movies: data })
    this.setState({ moviesFiltered: data })
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value })
    const moviesFiltered = this.state.movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ moviesFiltered: moviesFiltered })
  }

  componentDidMount = () => this.fetchData().catch(console.error)

  render() {
    return (
      <AppContext.Consumer>
        {
          context => (
            <Container >
              <Icon>
                <img src={search} alt='' />
              </Icon>
              <Input
                value={this.state.searchValue}
                placeholder='Pesquisar'
                onChange={(e) => {
                  this.handleChange(e)
                  context.setSearchValue(e.target.value)
                  context.setMoviesFiltered(this.state.moviesFiltered)
                }}
              />
            </Container>
          )

        }
      </AppContext.Consumer>
    )
  }
}