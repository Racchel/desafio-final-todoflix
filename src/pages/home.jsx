/** layouts */
import { BaseLayout } from '@shared/layouts'

/** components */
import { FeaturedMovie, CarouselMovies } from '@shared/components'


export const Home = () => {
  return (
    <BaseLayout>
      <FeaturedMovie />
      <CarouselMovies />
    </BaseLayout>
  )
}

