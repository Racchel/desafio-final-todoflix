/** pages */
import { Home } from '../pages'

/** routes */
export const routes = [

  {
    title: 'Página inicial',
    path: '/',
    element: <Home />
  },
  {
    title: 'Todos os filmes',
    path: '/movies/all',
    element: <p>Todos os filmes</p>
  },
  {
    title: 'Filmes favoritos',
    path: '/movies/favorites',
    element: <p>Filmes favoritos</p>
  },
  {
    title: 'Filmes asssistidos',
    path: '/movies/watched',
    element: <p>Filmes asssistidos</p>
  },
  {
    title: 'Filmes adicionados',
    path: '/movies/added',
    element: <p>Filmes adicionados</p>
  }
]
