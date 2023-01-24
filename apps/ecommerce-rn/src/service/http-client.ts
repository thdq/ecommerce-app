import axios, { AxiosResponse } from 'axios'

import { environment } from '../config'

export type HttpClientRequest = typeof axios.request

export type HttpClientResponse<T, D> = AxiosResponse<T, D>

export const httpClient = axios.create({
  baseURL: environment.baseApiUrl,
})
