import React, { useEffect, useState } from 'react'

/** layouts */
import { BaseLayout } from '@shared/layouts'

/** components */
import { FeaturedMovie } from '@shared/components'

/** services */
import { MoviesService } from '@shared/services/movies'

/** utils */

export const Home = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await MoviesService.getAll()
      setMovies(data)
    }
    fetchData()
      .catch(console.error)
  }, [])

  return (
    <BaseLayout>
      <FeaturedMovie />
      <ul>
        {
          movies.map(movie => (
            // <li key={movie.id}>{movie.title}</li>
            <li key={movie.id}></li>
          ))
        }
      </ul>
    </BaseLayout>
  )
}

