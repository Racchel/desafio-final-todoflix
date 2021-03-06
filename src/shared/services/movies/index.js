import { API } from '../axios-config'

/** uudv4 */
import { v4 as uuidv4 } from 'uuid'

const getAll = async () => {
  try {
    const { data } = await API.get('/movies')

    if (data) return data

    return new Error('Error listing movies.')

  } catch (error) {
    console.error(error)
    return new Error(error.message || 'Error listing movies.')
  }
}

const getById = async ({ id }) => {
  try {
    const { data } = await API.get(`/movies/${id}`)

    if (data) return data

    return new Error('Error querying movies.')

  } catch (error) {
    console.error(error)
    return new Error(error.message || 'Error querying movies.')
  }
}

const create = async ({ data: movie }) => {
  try {
    const id = uuidv4()

    const newMovie = { id, ...movie }

    const { data } = await API.post('/movies', newMovie)

    if (data) return movie

    return new Error('Error creating movies.')

  } catch (error) {
    console.error(error)
    return new Error(error.message || 'Error creating movie.')
  }
}

const updateById = async ({ id, data: movie }) => {
  try {
    await API.put(`/movies/${id}`, movie)

  } catch (error) {
    console.error(error)
    return new Error(error.message || 'Error updating movie.')
  }
}

/** alterna para true/false -> filme foi favoritado? */
const toggleFavorite = async ({ id }) => { return id }

/** alterna para true/false -> filme foi assistido? */
const toggleWatched = async ({ id }) => { return id }

/** alterna para true/false -> filme foi adicionado? */
const toggleAdded = async ({ id }) => { return id }


const deleteById = async ({ id }) => {
  try {
    await API.delete(`/movies/${id}`)

  } catch (error) {
    console.error(error)
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
