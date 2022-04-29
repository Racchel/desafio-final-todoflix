/** style */
import { Button } from './style'

/** contexts */
import { AppContext } from '@shared/contexts'

export const NewMovieButton = () => {
  return (
    <AppContext.Consumer>
      {
        context => (
          <Button onClick={() => {
            /** só abre se o modal estiver fechado */
            console.log('entrei no new buton')
            if (!context.state.createMovieModalIsOpen) {
              context.toggleCreateMovieModalIsOpen()
            }

          }}>
            Adicionar filme
          </Button>
        )
      }
    </AppContext.Consumer>

  )
}