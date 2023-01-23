import { ProductList } from '../models/product-list'
import { httpClient } from '../service/http-client'

const ITEMS_PER_PAGINATION = 20

export type GetProductsParam = {
  limit?: number
  page?: number
}

export const getProducts = async ({
  limit = ITEMS_PER_PAGINATION,
  page = 1,
}: GetProductsParam): Promise<ProductList | undefined> => {
  const offset = (page - 1) * limit

  return await httpClient
    .request<ProductList>({
      url: '/products',
      params: {
        limit,
        skip: offset,
      },
    })
    .then((res) => res.data)
    .catch(() => {
      throw new Error('An error occurred while fetching the product list')
    })
}
