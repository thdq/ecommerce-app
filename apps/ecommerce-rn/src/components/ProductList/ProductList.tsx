import { ProductModel } from '@app/models'
import { ProductCard } from '@app/components/ProductCard'
import { ListRenderItem, RefreshControl } from 'react-native'
import { FlatList, ProductListContainer } from './ProductList.styles'
import { useCallback } from 'react'

const NUMBER_COLUMNS = 2

type ProductListProps = {
  products: ProductModel[]
  isRefreshing: boolean
  onRefresh: () => void
}

export const ProductList = ({ products, isRefreshing, onRefresh }: ProductListProps) => {
  const renderItem: ListRenderItem<ProductModel> = useCallback(
    ({ item: product }) => <ProductCard testID='product-card' product={product} />,
    [],
  )
  const getKeyExtractor = (product: ProductModel) => product.id.toString()

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
