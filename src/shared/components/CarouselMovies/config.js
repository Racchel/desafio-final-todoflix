import React from 'react';

/** components */
import { Arrow } from '..'

export const carouselConfig = {
  renderCenterLeftControls: ({ previousSlide }) => <Arrow functionSlide={previousSlide} position='left' />,
  renderCenterRightControls: ({ nextSlide }) => <Arrow functionSlide={nextSlide} position='right' />,
  autoplayInterval: 2000,
  cellAlign: 'center',
  wrapAround: true,
  slidesToShow: 4,
  cellSpacing: 10,
  autoplay: true
}