import { useAtom } from 'jotai'
import useSWR from 'swr'
import { getProducts } from '@app/api'
import { productListModelAtom } from '@app/store'
import { mapProductList } from '@app/models'
import { useEffect } from 'react'

const GET_PRODUCTS_KEY = '/products'

export const useGetProducts = () => {
  const [filteredList, setProducts] = useAtom(productListModelAtom)
  const { data: response, ...swrOptions } = useSWR(GET_PRODUCTS_KEY, getProducts)

  useEffect(() => {
    setProducts(mapProductList(response?.data ?? null))
  }, [response])

  return {
    filteredList,
    ...swrOptions,
  }
}
