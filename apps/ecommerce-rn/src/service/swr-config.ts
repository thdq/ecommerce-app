import { httpClient, HttpClientRequest } from './http-client'

const fetcher = (params: HttpClientRequest) =>
  httpClient.request({ ...params }).then((res) => res.data)

const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
  suspense: true,
}

export default swrConfig
