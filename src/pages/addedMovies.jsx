/** layouts */
import { MoviesLayout } from '@shared/layouts'

/** routes */
import { routes } from '@shared/routes'

export const AddedMovies = () => {
  return (
    <MoviesLayout title={routes[4].title} filter={routes[4].filter} />
  )
}
