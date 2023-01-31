import { useAtom } from 'jotai'
import useSWRInfinite from 'swr/infinite'
import { getProducts } from '@app/api'
import { productListModelAtom } from '@app/store'
import { mapProductList, ProductModel } from '@app/models'
import { useCallback, useEffect } from 'react'

const LIMIT = 20

export const useGetProducts = () => {
  const [filteredList, setProducts] = useAtom(productListModelAtom)

  const { data: response, ...swrOptions } = useSWRInfinite((index: number) => {
    return `?limit=${LIMIT}&skip=${index * LIMIT}`
  }, getProducts)

  const handleProducts = useCallback(() => {
    const lastProductListResponse = response?.slice(-1)[0]
    const productList = {
      products: (response?.map((item) => item.data?.products).flat() ?? []) as ProductModel[],
      total: lastProductListResponse?.data?.total ?? 0,
      skip: lastProductListResponse?.data?.skip ?? 0,
      limit: lastProductListResponse?.data?.limit ?? 0,
    }

    if (!swrOptions.error) {
      setProducts(mapProductList(productList))
    }
  }, [response, swrOptions.error, setProducts])

  useEffect(() => {
    handleProducts()
  }, [handleProducts])

  return {
    filteredList,
    ...swrOptions,
  }
}
