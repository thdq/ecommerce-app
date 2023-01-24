import { SWRConfiguration } from 'swr'
import { httpClient, HttpClientRequest } from './http-client'

const fetcher = (params: HttpClientRequest) =>
  httpClient.request({ ...params }).then((res) => res.data)

const swrConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: false,
  shouldRetryOnError: false,
}

export default swrConfig
