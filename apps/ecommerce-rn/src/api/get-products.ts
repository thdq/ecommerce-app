import { Product } from '../models/product'
import { httpClient } from '../service/http-client'

const ITEMS_PER_PAGINATION = 20

export type GetProductsParam = {
  limit?: number
  page?: number
}

type ProductsPayload = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export const getProducts = ({
  limit = ITEMS_PER_PAGINATION,
  page = 1,
}: GetProductsParam): Promise<ProductsPayload | undefined> => {
  const offset = page * limit

  return new Promise((resolve, reject) => {
    httpClient
      .request({
        url: '/products',
        params: {
          limit,
          skip: offset,
        },
      })
      .then((res) => resolve(res.data))
      .catch((res) => {
        reject(res)
      })
  })
}
