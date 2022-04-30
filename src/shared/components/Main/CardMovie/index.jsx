/** contexts */
import { AppContext } from '@shared/contexts'

/** components */
import { IconHeart, IconLike } from '@shared/components'

/** style */
import {
  Description,
  Header,
  Likes,
  Title,
  Card,
  Img,
  Rate
} from './style'


export const CardMovie = ({ movie }) => {
  return (
    <AppContext.Consumer>

      {context => (
        <Card onClick={() => {
          /** só abre se o modal estiver fechado */
          if (!context.state.detailModalIsOpen) {
            context.toggleDetailModalIsOpen()
            context.setDetailModalData(movie)
          }
        }}>

          <IconHeart position='absolute' isFavorite={movie.isFavorite} id={movie.id} />
          <Img key={movie.id} src={movie.image} alt={movie.title} />

          <Header>
            <Title>{movie.title}</Title>
            <Rate>
              <Likes likes={movie.likes}>
                {movie.likes === 0 ? '-' : movie.likes + '/5'}
              </Likes>
              <IconLike size={15} like={movie.likes} />
            </Rate>
          </Header>

          <Description>{movie.description}</Description>
        </Card>
      )}
    </AppContext.Consumer>
  )
}
