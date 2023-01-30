import { useGetProducts } from '@app/hooks'
import { ProductListError, ProductListLoading } from '@app/components'
import { useState, useCallback, useEffect, useMemo } from 'react'

import { ProductList } from '@app/components'
import { useNavigation } from '@react-navigation/native'

const Products = () => {
  const navigation = useNavigation()

  const [isRefreshing, setRefreshing] = useState(false)
  const { filteredList, error, isLoading, mutate, setSize } = useGetProducts()

  const products = filteredList?.products

  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    await mutate()
    setRefreshing(false)
  }, [isRefreshing])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => onRefresh())
    return () => {
      unsubscribe
    }
  }, [navigation])

  const handleRetry = async () => await mutate()

  const handleFetchMore = () => {
    setSize((size) => size + 1)
  }

  return (
    <>
      {isLoading || isRefreshing ? (
        <ProductListLoading />
      ) : error ? (
        <ProductListError testID='product-list-error' onTryAgain={handleRetry} />
      ) : Array.isArray(products) ? (
        <ProductList
          onFetchMore={handleFetchMore}
          testID='product-list'
          isRefreshing={isRefreshing}
          onRefresh={onRefresh}
          products={products}
        />
      ) : null}
    </>
  )
}

export { Products }
