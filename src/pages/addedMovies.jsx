/** routes */
import { routes } from '@shared/routes'

/** layouts */
import { MoviesLayout } from '@shared/layouts'


export const AddedMovies = () => {
  return (
    <MoviesLayout title={routes[4].title} filter={routes[4].filter} />
  )
}
