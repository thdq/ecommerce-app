import { useAtom } from 'jotai'
import useSWR from 'swr'
import { getProducts } from '@app/api'
import { productListModelAtom } from '@app/store'

const GET_PRODUCTS_KEY = '/products'
const MAX_RETRY_FETCH_ON_ERROR = 3

export const useGetProducts = () => {
  const [filteredList, setProducts] = useAtom(productListModelAtom)
  const { data: response, ...swrOptions } = useSWR(GET_PRODUCTS_KEY, getProducts, {
    errorRetryCount: MAX_RETRY_FETCH_ON_ERROR,
  })

  if (!swrOptions.error) {
    setProducts(response?.data ?? null)
  }

  return {
    filteredList,
    ...swrOptions,
  }
}
