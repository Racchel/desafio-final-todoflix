import { Component } from 'react'

/** services */
import { MoviesService } from '@shared/services/movies'

/** components */
import { IconHeart, IconLike } from '@shared/components'

/** style */
import {
  Container,
  Content,
  Description,
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
          <IconHeart isFavorite={this.state.movie.isFavorite} />
          <Tag>Visto recentemente</Tag>
          <Title>{this.state.movie.title}</Title>
          <Description>{this.state.movie.description}</Description>
          <Rate>
            <Likes>{this.state.movie.likes}/5</Likes>
            <IconLike size={20} like={this.state.movie.likes} />
          </Rate>
        </Content>
      </Container>
    )
  }
}