import { environment } from '../environment'
import axios from 'axios'

export type HttpClientRequest = typeof axios.request

export const httpClient = axios.create({
  baseURL: environment.baseApiUrl,
})
