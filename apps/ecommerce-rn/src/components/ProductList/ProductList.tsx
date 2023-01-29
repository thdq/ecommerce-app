import { ProductModel } from '@app/models'
import { ProductCard } from '@app/components/ProductCard'
import { ListRenderItem, RefreshControl } from 'react-native'
import { FlatList, ProductListContainer } from './ProductList.styles'
import { useCallback } from 'react'
import { useAtomValue } from 'jotai'
import { CartSummaryModelAtom } from '@app/store'

const NUMBER_COLUMNS = 2

type ProductListProps = {
  products: ProductModel[]
  isRefreshing: boolean
  onRefresh: () => void
}

export const ProductList = ({ products, isRefreshing, onRefresh }: ProductListProps) => {
  const cart = useAtomValue(CartSummaryModelAtom)

  const renderItem: ListRenderItem<ProductModel> = useCallback(
    ({ item: product }) => (
      <ProductCard inCart={cart.hasProduct(product.id)} testID='product-card' product={product} />
    ),
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
