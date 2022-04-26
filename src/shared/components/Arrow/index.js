/** style */
import { Container } from './style'

export const Arrow = ({ functionSlide, position }) => {

  return (
    <Container
      xmlns='http://www.w3.org/2000/svg'
      fill='rgba(0, 0, 0, 0.4)'
      onClick={functionSlide}
      position={position}
      viewBox='0 0 24 24'
      stroke-width='1.5'
      width='45'
      height='45'
    >

      <path d='M16 12H8M8 12L11.5 15.5M8 12L11.5 8.5' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' />
    </ Container >
  )

}