import React from 'react'

/** layouts */
import { BaseLayout } from '@shared/layouts'

/** components */
import { FeaturedMovie, CarouselMovies } from '@shared/components'
// import Carousel from 'nuka-carousel'
// import styled from 'styled-components'

// const Img = styled.img`
//   width: 230px;
// `

export const Home = () => {
  return (
    <BaseLayout>
      <FeaturedMovie />
      {
        /** 
         <Carousel
           autoplay={true}
           autoplayInterval={2000}
           wrapAround={true}
           slidesToShow={5}
         >
           <Img src='https://extra.globo.com/incoming/23576301-333-d85/w488h275-PROP/81913954_my-cat-at-home..jpg' />
           <Img src='https://www.cietec.org.br/wp-content/uploads/2020/01/vida-de-gato.jpg' />
           <Img src='https://img.migalhas.com.br/gf_base/empresas/MIGA/imagens/6DE96B9BBC788A6643DC395030C061062616_gato.jpg' />
           <Img src='https://odontovet.com/wp-content/uploads/2021/07/IMG-GATO.jpeg' />
           <Img src='https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg' />
           <Img src='https://extra.globo.com/incoming/23576301-333-d85/w488h275-PROP/81913954_my-cat-at-home..jpg' />
   
         </Carousel>
        */
        <CarouselMovies />
      }
    </BaseLayout>
  )
}

