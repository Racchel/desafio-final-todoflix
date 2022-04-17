import styled from 'styled-components'

/** components */
import { Header } from '../components'
import { Theme } from '../themes'

/** theme */

/** styled */
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 0 54px;

  @media (max-width: ${Theme.bk.sm}) {
    padding: 0 20px;
  }
`

const BaseLayout = ({ title, children }) => {
  return (
    <Container>
      <Header />
      {
        title && (
          <h1>{title}</h1>
        )
      }
      {children}
    </Container>
  )
}

export { BaseLayout }