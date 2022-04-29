/** libs */
import ReactStars from 'react-rating-stars-component'

/** config */
import { info } from '../config'

/** style */
import {
  Modal,
  CloseModalButton
} from './style'

export const CreateMovieModal = ({ context }) => {

  return (
    <Modal>
      <CloseModalButton onClick={context.toggleCreateMovieModalIsOpen}>X</CloseModalButton>

      <h2>Editar dados</h2>

      <form action="">

        <label> Nome
          <input type='text' />
        </label>

        <label> Descrição
          <textarea />
        </label>

        <div>
          <label>Status</label>
          <input type="radio" value={true} name="watch_movie" /> Já assisti
          <input type="radio" value={false} name="watch_movie" /> Ainda não assisti
        </div>

        <div>
          <label>Nota</label>
          <ReactStars {...info} />
        </div>
      </form>
    </Modal>
  )
}