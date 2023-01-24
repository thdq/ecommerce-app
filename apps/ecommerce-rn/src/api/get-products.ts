import { environment } from '../config'
import { ProductList } from '../models/product-list'
import { httpClient, HttpClientResponse } from '../service/http-client'

const ITEMS_PER_PAGINATION = 20

export type GetProductsParam = {
  limit?: number
  page?: number
}

export const getProducts = async ({
  limit = ITEMS_PER_PAGINATION,
  page = 1,
}: GetProductsParam): Promise<HttpClientResponse<ProductList, unknown>> => {
  const offset = (page - 1) * limit

  if (typeof environment.delayRequestsInSeconds === 'number')
    await new Promise((resolve) => setTimeout(resolve, environment.delayRequestsInSeconds * 1000))

  try {
    const response = await httpClient.request<ProductList>({
      url: '/products',
      params: {
        limit,
        skip: offset,
      },
    })
    return response
  } catch {
    throw new Error('An error occurred while fetching the product list')
  }
}
