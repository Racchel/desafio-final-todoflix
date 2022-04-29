/** libs */
import ReactStars from 'react-rating-stars-component'

/** components */
import { IconDetails, IconHeart } from '@shared/components'

/** config */
import { info } from '../config'

/** style */
import {
  Modal,
  CloseModalButton,
  Img,
  ContentButtons,
  Tag,
  Title,
  Description
} from './style'


export const DetailModal = ({ context }) => {

  return (
    <Modal>
      {console.log(context)}
      <CloseModalButton onClick={context.toggleDetailModalIsOpen}>X</CloseModalButton>

      <Img src={context.state.detailModalData.image} alt={context.state.detailModalData.title} />

      <ContentButtons>
        <Tag>{context.state.detailModalData.isWatched ? 'Já assisti' : 'Não assisti'}</Tag>
        <IconHeart isFavorite={context.state.detailModalData.isFavorite} />
        <IconDetails />
      </ContentButtons>

      <Title>{context.state.detailModalData.title}</Title>

      <Description>{context.state.detailModalData.description}</Description>
      <ReactStars {...info} />
    </Modal>
  )
}