import { Component } from 'react'

/** services */
import { MoviesService } from '@shared/services/movies'

/** contexts */
import { AppContext } from '@shared/contexts'

/** react-icons*/
import { AiOutlineSearch } from 'react-icons/ai'

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
    const { searchValue, moviesFiltered } = this.state

    return (
      <AppContext.Consumer>
        {context => (
          <Container >
            <Icon>
              <AiOutlineSearch color='white' size={20} />
            </Icon>
            <Input
              value={searchValue}
              placeholder='Pesquisar'
              onChange={(e) => {
                this.handleChange(e)
                context.setSearchValue(e.target.value)
                context.setMoviesFiltered(moviesFiltered)
              }}
            />
          </Container>
        )}
      </AppContext.Consumer>
    )
  }
}