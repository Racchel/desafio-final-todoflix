import { Component } from 'react'

/** contexts */
import { AppContext } from '@shared/contexts'

/** layouts */
import { SearchLayout } from '@shared/layouts'

/** components */
import { Header, DetailModal, CreateMovieModal } from '@shared/components'

/** style */
import { ContainerBaseLayout } from './style'


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
    const { children, title } = this.props

    return (
      <AppContext.Consumer>
        {context => (
          <ContainerBaseLayout >
            <Header />
            {context.state.searchValue
              ? <SearchLayout />
              : <DefaultLayout children={children} title={title} />
            }

            {context.state.detailModalIsOpen && (
              <DetailModal context={context} />
            )}

            {context.state.createMovieModalIsOpen && (
              <CreateMovieModal context={context} />
            )}
          </ContainerBaseLayout >
        )}
      </AppContext.Consumer>
    )
  }
}

