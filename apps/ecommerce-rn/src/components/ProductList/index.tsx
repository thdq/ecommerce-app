import { useGetProducts } from '../../hooks/use-get-products'
import { ProductType } from '../../models/product'
import { ProductCard } from '../ProductCard'
import styled from 'styled-components/native'
import { ListRenderItem, FlatList as FlatListNative, RefreshControl } from 'react-native'
import { ProductListError } from '../ProductListError'
import { SkeletonCard } from 'ui-rn'
import { useState, useCallback } from 'react'
import { useProductModel } from '../../hooks/use-product-model'

const NUMBER_COLUMNS = 2
const SKELETON_FAKE_LIST = [...Array(6).keys()]

export const ProductList = () => {
  const [isRefreshing, setRefreshing] = useState(false)
  const { createModel } = useProductModel()

  const { filteredList, error, isLoading, mutate } = useGetProducts()
  const products = filteredList?.products ?? []

  const handleRetry = () => mutate()

  const renderSkeleton = () => <SkeletonCard />
  const renderItem: ListRenderItem<ProductType> = ({ item: product }) => (
    <ProductCard product={createModel(product)} />
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
          keyExtractor={(product: ProductType) => product.id.toString()}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        />
      ) : isLoading || isRefreshing ? (
        <FlatList
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

const ProductListContainer = styled.View`
  flex: 1;
`

const FlatList = styled.FlatList`
  flex: 1;
  margin: 0 4px 0 4px;
` as unknown as typeof FlatListNative
