import { Component } from 'react'
import styled from 'styled-components'
import ReactStars from 'react-rating-stars-component'
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';


/** contexts */
import { AppContext } from '@shared/contexts'

/** components */
import { Header, IconDetails, IconHeart } from '../components'

/** style */
import { ContainerBaseLayout } from './style'

/** layouts */
import { SearchLayout } from './SearchLayout'

/** theme */
import { Theme } from '../themes'
import { Description } from '../components/CardMovie/style'

const Modal = styled.div`
  width: 25%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Theme.colors.neutral.xl};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${Theme.colors.neutral.xs};
`
const CloseModalButton = styled.button`
  width: 30px;
  position: absolute;
  right: 0;
  top: 2px;
  cursor: pointer;
  background-color: transparent;
  color:${Theme.colors.neutral.xs};
  font-weight: bold;
  border: none;
`

const Img = styled.img`
  width: 100%;
`

const Tag = styled.span`
  background-color: ${Theme.colors.neutral.md};
  color: ${Theme.colors.neutral.xs};
  padding: 5px;
  border-radius: 5px;
`

const Title = styled.h2``

const ContentButtons = styled.div`
  width:fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
`

const info = {
  // color: 'black',
  value: 1,
  size: 40,
  activeColor: Theme.colors.level.v3,
  isHalf: true,
  a11y: true,
  count: 5,
  emptyIcon: <BsStar />,
  halfIcon: <BsStarHalf />,
  fullIcon: <BsStarFill />
};

const DefaultLayout = ({ children, title }) => {
  return (
    <>
      {title && <h1>{title}</h1>}
      {children}
    </>
  )
}

export class BaseLayout extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {
          context => (
            <ContainerBaseLayout >
              <Header />
              {
                context.state.searchValue
                  ? <SearchLayout />
                  : <DefaultLayout children={this.props.children} title={this.props.title} />
              }

              {
                context.state.detailModalIsOpen && (
                  <Modal>
                    <CloseModalButton onClick={context.toggleDetailModalIsOpen}>X</CloseModalButton>

                    <Img src={context.state.detailModalData.image} alt="" />

                    <ContentButtons>
                      <Tag>{context.state.detailModalData.isWatched ? 'Já assisti' : 'Não assisti'}</Tag>
                      <IconHeart isFavorite={context.state.detailModalData.isFavorite} />
                      <IconDetails />
                    </ContentButtons>

                    <Title>{context.state.detailModalData.title}</Title>

                    <Description>{context.state.detailModalData.description}</Description>
                    <ReactStars {...info} />
                  </Modal>
                )
              }
            </ContainerBaseLayout >

          )
        }
      </AppContext.Consumer>
    )
  }
}

