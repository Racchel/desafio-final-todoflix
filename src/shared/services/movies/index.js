import { API } from '../axios-config'

const getAll = async () => {
  console.log('entrei aqui')

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
    const { data } = await API.post('/movies', movie)

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
