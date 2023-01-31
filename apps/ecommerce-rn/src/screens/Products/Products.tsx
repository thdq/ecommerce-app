import { useGetProducts } from '@app/hooks'
import { ProductListError, ProductListLoading } from '@app/components'
import { useState, useCallback, useEffect } from 'react'

import { ProductList } from '@app/components'
import { useNavigation } from '@react-navigation/native'

const Products = () => {
  const navigation = useNavigation()

  const [isRefreshing, setRefreshing] = useState(false)
  const { filteredList, error, isLoading, mutate, setSize, isValidating } = useGetProducts()

  const products = filteredList?.products

  const handleRefresh = useCallback(async () => {
    setRefreshing(true)
    await mutate()
    setRefreshing(false)
  }, [mutate, setRefreshing])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => handleRefresh())
    return () => {
      unsubscribe
    }
  }, [navigation, handleRefresh])

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
          onFetchingMore={isValidating}
          onFetchMore={handleFetchMore}
          testID='product-list'
          isRefreshing={isRefreshing}
          onRefresh={handleRefresh}
          products={products}
        />
      ) : null}
    </>
  )
}

export { Products }
