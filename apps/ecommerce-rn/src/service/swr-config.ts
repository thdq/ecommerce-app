import { httpClient, HttpClientRequest } from './http-client'

const fetcher = (params: HttpClientRequest) =>
  httpClient.request({ ...params }).then((res) => res.data)

const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
}

export default swrConfig
