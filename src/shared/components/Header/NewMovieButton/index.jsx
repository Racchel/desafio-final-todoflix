/** style */
import { Button } from './style'

/** contexts */
import { AppContext } from '@shared/contexts'


export const NewMovieButton = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <Button onClick={() => {
          /** só abre se o modal estiver fechado */
          if (!context.state.createMovieModalIsOpen) return context.toggleCreateMovieModalIsOpen()
        }}>
          Adicionar filme
        </Button>
      )}
    </AppContext.Consumer >
  )
}