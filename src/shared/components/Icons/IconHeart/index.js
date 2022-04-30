import { Component } from 'react'

/** react-icons */
import { AiFillHeart } from 'react-icons/ai'

/** style */
import { Container } from './style'


export class IconHeart extends Component {
  state = {
    movies: []
  }

  render() {
    return (
      <Container
        position={this.props.position}
        isFavorite={this.props.isFavorite}
        onClick={() => {
          this.handleClick()
        }}
      >

        <AiFillHeart size={15} />
      </Container>
    )
  }
}
