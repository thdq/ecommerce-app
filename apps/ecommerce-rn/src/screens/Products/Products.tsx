import { useGetProducts } from '@app/hooks'
import { ProductListError, ProductListLoading } from '@app/components'
import { useState, useCallback, useEffect } from 'react'
import { Text } from 'react-native'

import { ProductList } from '@app/components'
import { StackNavigationProps } from '@app/navigation/AppNavigation'

type CheckoutProps = {
  navigation: StackNavigationProps
}

const Products = ({ navigation }: CheckoutProps) => {
  const [isRefreshing, setRefreshing] = useState(false)
  const { filteredList, error, isLoading, mutate } = useGetProducts()
  const products = filteredList?.products ?? []

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => onRefresh())
    return () => {
      unsubscribe
    }
  }, [navigation])

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
