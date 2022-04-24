// import { useEffect, useState } from 'react'
import Carousel from 'nuka-carousel'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

/** services */
import { MoviesService } from '@shared/services/movies'

const Img = styled.img`
  width: 240px;
`

export const CarouselMovies = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await MoviesService.getAll()
      setMovies(data)
      console.log(movies)
    }
    fetchData()
      .catch(console.error)
  }, [])

  return (
    <Carousel
      autoplay={true}
      autoplayInterval={2000}
      wrapAround={true}
      slidesToShow={5}
    >
      {
        movies.map(movie => (
          <Img key={movie.id} src={movie.image} />
        ))
      }


    </Carousel>
  )
}