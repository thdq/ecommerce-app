import { useAtom } from 'jotai'
import useSWR from 'swr'
import { getProducts } from '../api/get-products'
import { productListAtom } from '../atoms'

const GET_PRODUCTS_KEY = '/products'
const MAX_RETRY_FETCH_ON_ERROR = 3

export const useGetProducts = () => {
  const [filteredList, setProducts] = useAtom(productListAtom)
  const { data, ...swrOptions } = useSWR(GET_PRODUCTS_KEY, getProducts, {
    errorRetryCount: MAX_RETRY_FETCH_ON_ERROR,
  })

  if (!swrOptions.error) {
    setProducts(data ?? null)
  }

  return {
    filteredList,
    ...swrOptions,
  }
}
