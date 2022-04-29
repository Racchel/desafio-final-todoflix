/** react-icons */
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

/** theme */
import { Theme } from '@shared/themes'

export const info = {
  value: 1,
  size: 40,
  activeColor: Theme.colors.level.v3,
  isHalf: true,
  a11y: true,
  count: 5,
  emptyIcon: <BsStar />,
  halfIcon: <BsStarHalf />,
  fullIcon: <BsStarFill />
};