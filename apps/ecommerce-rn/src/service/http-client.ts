import Constants from 'expo-constants'

import axios from 'axios'

export type HttpClientRequest = typeof axios.request

export const httpClient = axios.create({
  baseURL: Constants?.expoConfig?.extra?.baseApiUrl,
})
