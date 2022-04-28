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
    moviesFiltered: [],
    moviesCarousel: []
  }
  setSearchValue = (value) => this.setState({ searchValue: value })
  setMoviesFiltered = (value) => this.setState({ moviesFiltered: value })
  setMoviesCarousel = (value) => this.setState({ moviesCarousel: value })
  setDetailModalData = (value) => this.setState({ detailModalData: value })

  toggleDetailModalIsOpen = () => this.setState({ detailModalIsOpen: !this.state.detailModalIsOpen })

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        setSearchValue: this.setSearchValue,
        setMoviesFiltered: this.setMoviesFiltered,
        setMoviesCarousel: this.setMoviesCarousel,
        toggleDetailModalIsOpen: this.toggleDetailModalIsOpen,
        setDetailModalData: this.setDetailModalData
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
