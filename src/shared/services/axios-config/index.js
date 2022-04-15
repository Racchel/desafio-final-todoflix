import axios from 'axios'

import { envs } from '../../environments'

export const API = axios.create({
  baseURL: envs.BASE_URL
})