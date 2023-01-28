import { useGetProducts } from '@app/hooks'
import { ProductListError, ProductListLoading } from '@app/components'
import { useState, useCallback } from 'react'

import { ProductList } from '@app/components'

const Products = () => {
  const [isRefreshing, setRefreshing] = useState(false)
  const { filteredList, error, isLoading, mutate } = useGetProducts()
  const products = filteredList?.products ?? []

  const handleRetry = async () => await mutate()

  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    await mutate()
    setRefreshing(false)
  }, [isRefreshing])

  return (
    <>
      {products.length && !isRefreshing ? (
        <ProductList isRefreshing={isRefreshing} onRefresh={onRefresh} products={products} />
      ) : isLoading || isRefreshing ? (
        <ProductListLoading />
      ) : error ? (
        <ProductListError onTryAgain={handleRetry} />
      ) : null}
    </>
  )
}

export { Products }
