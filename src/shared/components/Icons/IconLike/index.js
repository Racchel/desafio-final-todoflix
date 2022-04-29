/** style */
import { Container } from './style'

/** react-icons*/
import { AiFillLike } from 'react-icons/ai';

/** theme */
import { Theme } from '@shared/themes'

export const IconLike = ({ size, like }) => {

  return (
    <Container>
      <AiFillLike size={size} color={
        like < 3
          ? Theme.colors.level.v1 : like >= 4
            ? Theme.colors.level.v3
            : Theme.colors.level.v2
      } />
    </Container>
  )

}