import React, { useEffect, useState } from 'react'

/** layouts */
import { BaseLayout } from '../shared/layouts'

/** services */
import { MoviesService } from '../shared/services/movies'

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
    <BaseLayout title='Página inicial'>
      <ul>
        {
          movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))
        }
      </ul>
    </BaseLayout>
  )
}

