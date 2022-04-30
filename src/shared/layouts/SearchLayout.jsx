import { Component } from 'react'

/** contexts */
import { AppContext } from '@shared/contexts'

/** components */
import { CardMovie } from '@shared/components'

/** style */
import { ContainerMoviesLayout } from './style'


export class SearchLayout extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <p>Você pesquisou por: {context.state.searchValue}.</p>
            <ContainerMoviesLayout>
              {context.state.moviesFiltered.length > 0
                ? context.state.moviesFiltered.map(movie => <CardMovie key={movie.id} movie={movie} />)
                : <p>Filme não encontrado!</p>
              }
            </ContainerMoviesLayout>
          </>
        )}
      </AppContext.Consumer>

    )
  }
}