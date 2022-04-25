import { Component } from 'react'

/** services */
import { MoviesService } from '@shared/services/movies'

/** images */
import iconLike from '@shared/assets/icons/like.svg'
import iconHeart from '@shared/assets/icons/heart.svg'

/** style */
import {
  Container,
  Content,
  Description,
  IconHeart,
  IconLike,
  Image,
  Likes,
  Rate,
  Tag,
  Title
} from './style'


export class FeaturedMovie extends Component {
  state = {
    movie: []
  }

  fetchData = async () => {
    const data = await MoviesService.getById({ id: 0 })

    this.setState({
      movie: data
    })
  }

  componentDidMount() {
    this.fetchData()
      .catch(console.error)
  }

  render() {
    return (
      <Container>
        <Image src={this.state.movie.image} alt='' />
        <Content>
          <IconHeart src={iconHeart} alt='' />
          <Tag>Visto recentemente</Tag>
          <Title>{this.state.movie.title}</Title>
          <Description>{this.state.movie.description}</Description>
          <Rate>
            <Likes>{this.state.movie.likes}/5</Likes>
            <IconLike src={iconLike} alt='' />
          </Rate>
        </Content>
      </Container>
    )
  }
}