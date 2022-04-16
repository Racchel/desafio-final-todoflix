/** pages */
import { Home } from '../../pages'

/** routes */
export const routes = [

  {
    title: 'Início',
    path: '/',
    element: <Home />
  },
  {
    title: 'Todos',
    path: '/movies/all',
    element: <p>Todos os filmes</p>
  },
  {
    title: 'Favoritos',
    path: '/movies/favorites',
    element: <p>Filmes favoritos</p>
  },
  {
    title: 'Já vistos',
    path: '/movies/watched',
    element: <p>Filmes asssistidos</p>
  },
  {
    title: 'Adicionados',
    path: '/movies/added',
    element: <p>Filmes adicionados</p>
  }
]
