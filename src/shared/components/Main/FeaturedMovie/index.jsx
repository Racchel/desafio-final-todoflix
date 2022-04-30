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
    const data = await MoviesService.getById({ id: '24ca9884-0a76-4cab-b4bc-4eea34800b35' })
    this.setState({ movie: data })
  }

  componentDidMount = () => this.fetchData().catch(console.error)

  render() {
    const { image, isFavorite, title, description, likes } = this.state.movie

    return (
      <Container>
        <Image src={image} alt={title} />

        <Content>
          <IconHeart isFavorite={isFavorite} />
          <Tag>Visto recentemente</Tag>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Rate>
            <Likes>{likes}/5</Likes>
            <IconLike size={20} like={likes} />
          </Rate>
        </Content>

      </Container>
    )
  }
}

