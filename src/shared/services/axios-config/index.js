import axios from 'axios'

/** interceptors */
import { errorInterceptor, responseInterceptor } from '../interceptors'

/** environments */
import { envs } from '../../environments'

const API = axios.create({
  baseURL: envs.BASE_URL
})

API.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
)

export { API }