import { ProductModel } from '@app/models'
import { ProductCard } from '@app/components/ProductCard'
import { ActivityIndicator, ListRenderItem, RefreshControl, ViewProps } from 'react-native'
import { FlatList, ProductListContainer } from './ProductList.styles'
import { useCallback } from 'react'
import { useCartSummary } from '@app/hooks'

const NUMBER_COLUMNS = 2

type ProductListProps = {
  products: ProductModel[]
  isRefreshing: boolean
  onRefresh: () => void
  onFetchMore?: () => void
  onFetchingMore?: boolean
} & ViewProps

export const ProductList = ({
  products,
  isRefreshing,
  onRefresh,
  onFetchMore,
  onFetchingMore,
  ...props
}: ProductListProps) => {
  const { cartSummary } = useCartSummary()

  const renderItem: ListRenderItem<ProductModel> = useCallback(
    ({ item: product }) => (
      <ProductCard
        inCart={cartSummary.hasProduct(product.id) || false}
        testID='product-card'
        product={product}
      />
    ),
    [],
  )
  const getKeyExtractor = (product: ProductModel) => product.id.toString()

  return (
    <ProductListContainer>
      <FlatList
        {...props}
        data={products}
        numColumns={NUMBER_COLUMNS}
        keyExtractor={getKeyExtractor}
        renderItem={renderItem}
        onEndReached={onFetchMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <ActivityIndicator
            animating={onFetchingMore}
            style={{ marginVertical: 16 }}
            size='large'
          />
        }
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
      />
    </ProductListContainer>
  )
}
