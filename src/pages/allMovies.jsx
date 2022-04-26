/** layouts */
import { MoviesLayout } from '@shared/layouts'

/** routes */
import { routes } from '@shared/routes'

export const AllMovies = () => {
  return (
    <MoviesLayout title={routes[1].title} filter={routes[1].filter} />
  )
}
