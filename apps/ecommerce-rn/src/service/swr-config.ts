import { SWRConfiguration } from 'swr'
import { httpClient, HttpClientRequest } from './http-client'

const fetcher = (params: HttpClientRequest) =>
  httpClient.request({ ...params }).then((res) => res.data)

export const swrConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: false,
  shouldRetryOnError: false,
}
