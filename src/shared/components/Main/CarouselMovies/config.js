import React from 'react'

/** components */
import { IconArrow } from '@shared/components'

export const carouselConfig = {
  renderCenterLeftControls: ({ previousSlide }) => <IconArrow functionSlide={previousSlide} position='left' />,
  renderCenterRightControls: ({ nextSlide }) => <IconArrow functionSlide={nextSlide} position='right' />,
  autoplayInterval: 2000,
  cellAlign: 'center',
  wrapAround: true,
  slidesToShow: 4,
  cellSpacing: 10,
  autoplay: true
}