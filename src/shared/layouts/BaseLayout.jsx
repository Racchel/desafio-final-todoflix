import styled from 'styled-components'

/** theme */

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

const BaseLayout = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  )
}

export { BaseLayout }