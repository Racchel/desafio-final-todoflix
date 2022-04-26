/** pages */
import { Home, AllMovies, FavoriteMovies, AddedMovies, WatchedMovies } from '../../pages'

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
    element: <AllMovies />,
    filter: 'all'
  },
  {
    title: 'Favoritos',
    path: '/movies/favorites',
    element: <FavoriteMovies />,
    filter: 'isFavorite'
  },
  {
    title: 'Já vistos',
    path: '/movies/watched',
    element: <WatchedMovies />,
    filter: 'isWatched'
  },
  {
    title: 'Adicionados',
    path: '/movies/added',
    element: <AddedMovies />,
    filter: 'isAdded'
  }
]
