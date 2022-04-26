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
    moviesFiltered: []
  }
  setSearchValue = (value) => this.setState({ searchValue: value })
  setMoviesFiltered = (value) => this.setState({ moviesFiltered: value })

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        setSearchValue: this.setSearchValue,
        setMoviesFiltered: this.setMoviesFiltered
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
