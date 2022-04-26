import { Component } from 'react'

/** contexts */
import { AppContext } from '@shared/contexts'

/** components */
import { Header } from '../components'

/** style */
import { Container } from './style'

/** layouts */
import { SearchLayout } from './SearchLayout'


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
            <Container >
              <Header />
              {
                context.state.searchValue
                  ? <SearchLayout />
                  : <DefaultLayout children={this.props.children} title={this.props.title} />
              }
            </Container >

          )
        }
      </AppContext.Consumer>
    )
  }
}

