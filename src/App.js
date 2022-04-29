/** react */
import { BrowserRouter } from 'react-router-dom'

/** themes */
import { Theme } from './shared/themes'

/** routes */
import { AppRoutes } from './routes'

/** contexts */
import { AppContext } from '@shared/contexts'
import { Component } from 'react'

export class App extends Component {
  state = {
    searchValue: '',
    detailModalIsOpen: false,
    detailModalData: undefined,
    createMovieModalIsOpen: false,
    createMovieModalData: undefined,
    moviesCarousel: []
  }

  /** set value state */
  setSearchValue = (value) => this.setState({ searchValue: value })
  setMoviesFiltered = (value) => this.setState({ moviesFiltered: value })
  setMoviesCarousel = (value) => this.setState({ moviesCarousel: value })
  setDetailModalData = (value) => this.setState({ detailModalData: value })
  setCreateMovieModalData = (value) => this.setState({ createMovieModalData: value })

  /** toggle value */
  toggleDetailModalIsOpen = () => this.setState({ detailModalIsOpen: !this.state.detailModalIsOpen })
  toggleCreateMovieModalIsOpen = () => this.setState({ createMovieModalIsOpen: !this.state.createMovieModalIsOpen })

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        setSearchValue: this.setSearchValue,
        setMoviesFiltered: this.setMoviesFiltered,
        setMoviesCarousel: this.setMoviesCarousel,
        setDetailModalData: this.setDetailModalData,
        setCreateMovieModalData: this.setCreateMovieModalData,

        toggleDetailModalIsOpen: this.toggleDetailModalIsOpen,
        toggleCreateMovieModalIsOpen: this.toggleCreateMovieModalIsOpen
      }}>
        <BrowserRouter>
          <Theme.GlobalStyle />
          <AppRoutes />
        </BrowserRouter >
      </AppContext.Provider>
    )
  }
}

export default App
