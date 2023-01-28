import { Product } from '@app/models'
import { ProductCard } from '@app/components/ProductCard'
import { ListRenderItem, RefreshControl } from 'react-native'
import { useProductModel } from '@app/hooks'
import { FlatList, ProductListContainer } from './ProductList.styles'
import { useCallback } from 'react'

const NUMBER_COLUMNS = 2

type ProductListProps = {
  products: Product[]
  isRefreshing: boolean
  onRefresh: () => void
}

export const ProductList = ({ products, isRefreshing, onRefresh }: ProductListProps) => {
  const { createProductModel } = useProductModel()

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item: product }) => (
      <ProductCard testID='product-card' product={createProductModel(product)} />
    ),
    [],
  )
  const getKeyExtractor = (product: Product) => product.id.toString()

  return (
    <ProductListContainer>
      <FlatList
        data={products}
        numColumns={NUMBER_COLUMNS}
        keyExtractor={getKeyExtractor}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
      />
    </ProductListContainer>
  )
}
