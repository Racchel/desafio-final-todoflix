import { API } from '../axios-config'

class MovieListDTO {
  constructor({ id, title, description, image, likes, isFavorite, isWatched, isAdded }) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.likes = likes
    this.isFavorite = isFavorite
    this.isWatched = isWatched
    this.isAdded = isAdded
  }
}

class MovieCreateDTO {
  constructor({ id }) {
    this.id = id
  }
}

const getAll = async ({ filter: filter }) => {
  if (!filter) return filter = ''

  try {
    const { data } = await API.get(`/movies?title_like='${filter}`)

    /** teste para ver se faz sentido */
    if (data) {
      if (Array.isArray(data)) {
        let dataArray = []

        dataArray.push(data.map(item => {
          const movie = new MovieListDTO(item)
          return movie
        }))

        return dataArray
      } else {
        return data
      }
    }

    return new Error('Error listing movies.')

  } catch (error) {
    console.err(error)
    return new Error(error.message || 'Error listing movies.')
  }
}

const getById = async ({ id: id }) => {
  try {
    const { data } = await API.get(`/movies/${id}`)

    if (data) {
      const movie = new MovieListDTO(data)
      return movie
    }

    return new Error('Error querying movies.')

  } catch (error) {
    console.err(error)
    return new Error(error.message || 'Error querying movies.')

  }
}

const create = async ({ data: movie }) => {
  try {
    const { data } = await API.post('/movies', movie)

    if (data) {
      const movie = new MovieCreateDTO(data)
      return movie
    }

    return new Error('Error creating movies.')

  } catch (error) {
    console.err(error)
    return new Error(error.message || 'Error creating movie.')
  }
}

const updateById = async ({ id: id, data: movie }) => {
  try {
    await API.put(`/movies/${id}`, movie)

  } catch (error) {
    console.err(error)
    return new Error(error.message || 'Error updating movie.')

  }
}

/** teste para ver se faz sentido */
/** alterna para true/false -> filme foi favoritado? */
const toggleFavorite = async ({ id: id }) => {

  const movie = await getById({ id: id })

  !movie.isFavorite

  try {
    await API.patch((`/movies/toggleFavorite/${id}`, movie))

  } catch (error) {
    console.err(error)
    return new Error(error.message || 'Error toggling favorite movie.')
  }
}

/** teste para ver se faz sentido */
/** alterna para true/false -> filme foi assistido? */
const toggleWatched = async ({ id: id }) => {

  const movie = await getById({ id: id })

  !movie.isWatched

  try {
    await API.patch((`/movies/toggleWatched/${id}`, movie))

  } catch (error) {
    console.err(error)
    return new Error(error.message || 'Error toggling watched movie.')
  }
}

/** teste para ver se faz sentido */
/** alterna para true/false -> filme foi adicionado? */
const toggleAdded = async ({ id: id }) => {

  const movie = await getById({ id: id })

  !movie.isAdded

  try {
    await API.patch((`/movies/toggleAdded/${id}`, movie))

  } catch (error) {
    console.err(error)
    return new Error(error.message || 'Error toggling added movies.')
  }
}

const deleteById = async ({ id: id }) => {
  try {
    await API.delete(`/movies/${id}`)

  } catch (error) {
    console.err(error)
    return new Error(error.message || 'Error deleting movies.')
  }
}

export const MoviesService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  toggleFavorite,
  toggleWatched,
  toggleAdded
}
