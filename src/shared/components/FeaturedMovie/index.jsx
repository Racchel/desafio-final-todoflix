import styled from 'styled-components'
import { useEffect, useState } from 'react'

/** services */
import { MoviesService } from '@shared/services/movies'

/** images */
import iconLike from '@shared/assets/icons/like.svg'
import iconHeart from '@shared/assets/icons/heart.svg'

/** theme */
import { Theme } from '../../themes'

/** styled */
const icon = '20px'

const Container = styled.div`
  display: flex;
  align-items: start;
  margin: 80px 0 0 0;

  @media (max-width: ${Theme.bk.lg}) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`

const Image = styled.img`
  width: 425px;
  margin: 0 50px 0 0;

  @media (max-width: ${Theme.bk.lg}) {
    width: 500px;
    margin: 0 0 25px 0;
  }
  @media (max-width: ${Theme.bk.sm}) {
    width: 100%;
  }
`

const Content = styled.div`
  width: 450px;
  height: 240px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  
  @media (max-width: ${Theme.bk.lg}) {
    width: 500px;
  }
  @media (max-width: ${Theme.bk.sm}) {
    width: 100%;
    height: auto;
  }
`

const IconHeart = styled.img`
    width: ${icon};
  `
const Tag = styled.p`
  font-size: ${Theme.font.size.md};
  font-weight: bold;
`
const Title = styled.h2`
  font-size: ${Theme.font.size.xl};
`
const Description = styled.p`
  font-size: ${Theme.font.size.sm};
  line-height: 22px;
`

const Rate = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 20px;
`
const IconLike = styled.img`
  width:  ${icon};
  position: absolute;
  top: 45%;
  left: 30px;
  transform: translateY(-50%) ;
`
const Likes = styled.p`
  padding: 0 5px 0 0;
  font-size: ${Theme.font.size.md};
  font-weight: bold;
`

export const FeaturedMovie = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await MoviesService.getById({ id: 0 })
      setMovie(data)
    }
    fetchData()
      .catch(console.error)
  }, [])

  return (
    <Container>
      <Image src={movie.image} alt='' />
      <Content>
        <IconHeart src={iconHeart} alt='' />
        <Tag>Visto recentemente</Tag>
        <Title>{movie.title}</Title>
        <Description>{movie.description}</Description>
        <Rate>
          <Likes>{movie.likes}/5</Likes>
          <IconLike src={iconLike} alt='' />
        </Rate>
      </Content>
    </Container>
  )
}