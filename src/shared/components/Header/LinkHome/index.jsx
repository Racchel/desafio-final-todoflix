import { Home } from './style'

export const LinkHome = ({ route }) => {
  return (
    <Home to={route.path}>{route.title}</Home>
  )
}