import { useAtom } from 'jotai'
import useSWRInfinite from 'swr/infinite'
import { getProducts } from '@app/api'
import { productListModelAtom } from '@app/store'
import { mapProductList, ProductModel } from '@app/models'
import { useEffect } from 'react'

const LIMIT = 20

export const useGetProducts = () => {
  const [filteredList, setProducts] = useAtom(productListModelAtom)

  const { data: response, ...swrOptions } = useSWRInfinite((index: number) => {
    return `?limit=${LIMIT}&skip=${index * LIMIT}`
  }, getProducts)

  const products = (response?.map((item) => item.data?.products).flat() ?? []) as ProductModel[]
  const lastProductListResponse = response?.at(-1)
  const total = lastProductListResponse?.data?.total ?? 0
  const skip = lastProductListResponse?.data?.skip ?? 0
  const limit = lastProductListResponse?.data?.limit ?? 0

  useEffect(() => {
    if (!swrOptions.error) {
      setProducts(
        mapProductList(
          {
            products,
            total,
            skip,
            limit,
          } ?? null,
        ),
      )
    }
  }, [response])

  return {
    filteredList,
    ...swrOptions,
  }
}
