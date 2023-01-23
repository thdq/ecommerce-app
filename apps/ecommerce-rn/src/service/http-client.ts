import Constants from 'expo-constants'

import axios, { AxiosResponse } from 'axios'

export type HttpClientRequest = typeof axios.request

export type HttpClientResponse<T, D> = AxiosResponse<T, D>

export const httpClient = axios.create({
  baseURL: Constants?.expoConfig?.extra?.baseApiUrl,
})
