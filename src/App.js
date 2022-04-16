/** react */
import { BrowserRouter } from 'react-router-dom'

/** routes */
import { AppRoutes } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
