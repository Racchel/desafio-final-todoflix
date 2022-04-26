/** layouts */
import { MoviesLayout } from '@shared/layouts'

/** routes */
import { routes } from '@shared/routes'

export const FavoriteMovies = () => {
  return (
    <MoviesLayout title={routes[2].title} filter={routes[2].filter} />
  )
}
