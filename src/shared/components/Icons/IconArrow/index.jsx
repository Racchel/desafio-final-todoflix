/** react-icons*/
import { RiArrowDropRightLine, RiArrowDropLeftLine } from 'react-icons/ri'

/** style */
import { Container } from './style'


export const IconArrow = ({ functionSlide, position }) => {
  return (
    <Container onClick={functionSlide}>
      {position === 'right'
        ? <RiArrowDropRightLine size={50} />
        : <RiArrowDropLeftLine size={50} />
      }
    </ Container >
  )
}