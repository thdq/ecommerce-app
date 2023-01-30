import { environment } from '@app/config'
import { ProductList } from '@app/models'
import { httpClient, HttpClientResponse } from '@app/services'

export type GetProductsParam = {
  limit?: number
  page?: number
}

export const getProducts = async (
  queryString: string,
): Promise<HttpClientResponse<ProductList, unknown>> => {
  if (typeof environment.delayRequestsInSeconds === 'number' && environment.isDevelopment())
    await new Promise((resolve) => setTimeout(resolve, environment.delayRequestsInSeconds * 1000))

  try {
    const response = await httpClient.request<ProductList>({
      url: `/products${queryString}`,
      method: 'GET',
    })
    return response
  } catch {
    throw new Error('An error occurred while fetching the product list')
  }
}
