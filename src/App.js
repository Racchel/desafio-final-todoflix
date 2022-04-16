/** react */
import { BrowserRouter } from 'react-router-dom'

/** themes */
import { Theme } from './shared/themes'

/** routes */
import { AppRoutes } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Theme.GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
