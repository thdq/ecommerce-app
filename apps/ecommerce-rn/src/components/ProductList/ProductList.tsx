import { useGetProducts } from '@app/hooks'
import { Product } from '@app/models'
import { ProductCard } from '@app/components/ProductCard'
import { ListRenderItem, RefreshControl } from 'react-native'
import { ProductListError } from '@app/components/ProductListError'
import { SkeletonCard } from 'ui-rn'
import { useState, useCallback } from 'react'
import { useProductModel } from '@app/hooks'
import { FlatList, ProductListContainer } from './ProductList.styles'

const NUMBER_COLUMNS = 2
const SKELETON_FAKE_LIST = [...Array(6).keys()]

export const ProductList = () => {
  const [isRefreshing, setRefreshing] = useState(false)
  const { createProductModel } = useProductModel()

  const { filteredList, error, isLoading, mutate } = useGetProducts()
  const products = filteredList?.products ?? []

  const handleRetry = () => mutate()

  const renderSkeleton = () => <SkeletonCard />
  const renderItem: ListRenderItem<Product> = ({ item: product }) => (
    <ProductCard testID='product-card' product={createProductModel(product)} />
  )

  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    await mutate()
    setRefreshing(false)
  }, [isRefreshing])

  return (
    <ProductListContainer>
      {products.length && !isRefreshing ? (
        <FlatList
          data={products}
          numColumns={NUMBER_COLUMNS}
          keyExtractor={(product: Product) => product.id.toString()}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        />
      ) : isLoading || isRefreshing ? (
        <FlatList
          testID='skeleton-loading'
          data={SKELETON_FAKE_LIST}
          numColumns={NUMBER_COLUMNS}
          keyExtractor={(item: number) => item.toString()}
          renderItem={renderSkeleton}
        />
      ) : error ? (
        <ProductListError onTryAgain={handleRetry} testID='error' />
      ) : null}
    </ProductListContainer>
  )
}
