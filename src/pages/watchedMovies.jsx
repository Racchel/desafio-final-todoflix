/** layouts */
import { MoviesLayout } from '@shared/layouts'

/** routes */
import { routes } from '@shared/routes'

export const WatchedMovies = () => {
  return (
    <MoviesLayout title={routes[3].title} filter={routes[3].filter} />
  )
}
