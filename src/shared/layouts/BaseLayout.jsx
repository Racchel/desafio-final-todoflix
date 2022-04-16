import styled from 'styled-components'

/** components */
import { Header } from '../components'

/** theme */

/** styled */
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

const BaseLayout = ({ title, children }) => {
  return (
    <Container>
      <Header />
      <h1>{title}</h1>
      {children}
    </Container>
  )
}

export { BaseLayout }