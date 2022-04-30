/** libs */
import { Component } from 'react'

/** libs */
import ReactStars from 'react-rating-stars-component'

/** services */
import { MoviesService } from '@shared/services/movies'

/** config */
import { info } from '../config'

/** style */
import {
  Modal,
  CloseModalButton,
  ButtonSubmit,
  Container,
  Content,
  InputTitle,
  InputDescription,
  Title,
  Button,
  Footer,
  Form,
  Image,
  Label
} from './style'



export class CreateMovieModal extends Component {

  state = {
    title: '',
    description: '',
    image: 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png',
    likes: 0,
    isFavorite: false,
    isWatched: false,
    isAdded: true
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(this.state)
    const respo = await MoviesService.create({ data: this.state })
    console.log(respo)

    this.setState({
      title: '',
      description: '',
      image: 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png',
      likes: 0,
      isWatched: false,
    })
  }

  handleFile = (e) => {
    const [file] = e.target.files

    this.setState({
      image: URL.createObjectURL(file)
    })
  }

  render() {
    const { title, description, image } = this.state
    const { toggleCreateMovieModalIsOpen } = this.props.context

    return (
      <Modal>
        <CloseModalButton onClick={toggleCreateMovieModalIsOpen}>X</CloseModalButton>

        <Title>Adicionar dados</Title>

        <Form action='' onSubmit={this.handleSubmit}>
          <Container>
            <Content>

              <Label> Nome
                <InputTitle
                  type='text'
                  value={title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </Label>

              <Label> Descrição
                <InputDescription
                  value={description}
                  onChange={(e) => this.setState({ description: e.target.value })}
                />
              </Label>

              <div
                onChange={(e) => this.setState({ isWatched: e.target.value.toLowerCase() === 'true' })}
              >
                <Label>Status</Label>
                <input type='radio' value={true} name='watch_movie' /> Já assisti
                <input type='radio' value={false} name='watch_movie' /> Ainda não assisti
              </div>

              <div>
                <Label>Nota</Label>
                <ReactStars {...info}
                  onChange={(value) => this.setState({ like: value })}
                />
              </div>
            </Content>

            <Content>
              <Label>Imagem de capa</Label>
              <Image src={image} alt='' />
              <input
                type='file'
                accept='image/*'
                onChange={this.handleFile}
              />
            </Content>
          </Container>
          <Footer>
            <ButtonSubmit type='submit' value='Confirmar' />
            <Button onClick={this.props.context.toggleCreateMovieModalIsOpen}>Cancelar</Button>
          </Footer>
        </Form>
      </Modal >
    )
  }
}