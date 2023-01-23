import { useAtom } from 'jotai'
import useSWR from 'swr'
import { getProducts } from '../api/get-products'
import { productListAtom } from '../atoms'

const GET_PRODUCTS_KEY = '/products'

export const useGetProducts = () => {
  const [filteredList, setProducts] = useAtom(productListAtom)
  const { data, ...swrOptions } = useSWR(GET_PRODUCTS_KEY, getProducts)

  if (!swrOptions.error) {
    setProducts(data || null)
  }

  return {
    filteredList,
    ...swrOptions,
  }
}
