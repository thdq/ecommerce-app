import useSWR from 'swr'
import { getProducts } from '../api/get-products'

const GET_PRODUCTS_KEY = '/products'

export const useGetProducts = () => {
  const swrResponse = useSWR(GET_PRODUCTS_KEY, getProducts)

  return {
    ...swrResponse,
  }
}
