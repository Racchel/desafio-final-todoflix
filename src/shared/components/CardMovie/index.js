/** style */
import { Card, Img, Header, Description, Title, Likes, Rate } from './style'

/** components */
import { IconHeart, IconLike } from '..'

export const CardMovie = ({ movie }) => {
  return (
    <Card>
      <IconHeart />
      <Img key={movie.id} src={movie.image} />
      <Header>
        <Title>{movie.title}</Title>
        <Rate>
          <Likes likes={movie.likes}>
            {movie.likes === 0 ? '-' : movie.likes + '/5'}
          </Likes>
          <IconLike />
        </Rate>
      </Header>
      <Description>{movie.description}</Description>
    </Card >
  )
}
