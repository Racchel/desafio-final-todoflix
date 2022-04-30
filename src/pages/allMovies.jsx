/** routes */
import { routes } from '@shared/routes'

/** layouts */
import { MoviesLayout } from '@shared/layouts'


export const AllMovies = () => {
  return (
    <MoviesLayout title={routes[1].title} filter={routes[1].filter} />
  )
}
