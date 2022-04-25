/** components */
import { Arrow } from '..'

export const carouselConfig = {
  renderCenterLeftControls: ({ previousSlide }) => <Arrow functionSlide={previousSlide} position='left' />,
  renderCenterRightControls: ({ nextSlide }) => <Arrow functionSlide={nextSlide} position='right' />,
  defaultControlsConfig: {
    pagingDotsStyle: { fill: 'none' },
    nextButtonText: '>',
    prevButtonText: '<',
  },
  autoplayInterval: 2000,
  adaptiveHeight: true,
  cellAlign: 'center',
  wrapAround: true,
  slidesToShow: 4,
  cellSpacing: 10,
  autoplay: true
}