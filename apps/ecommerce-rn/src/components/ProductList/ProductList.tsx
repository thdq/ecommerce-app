import { Product } from '@app/models'
import { ProductCard } from '@app/components/ProductCard'
import { ListRenderItem, RefreshControl } from 'react-native'
import { useProductModel } from '@app/hooks'
import { FlatList, ProductListContainer } from './ProductList.styles'

const NUMBER_COLUMNS = 2

type ProductListProps = {
  products: Product[]
  isRefreshing: boolean
  onRefresh: () => void
}

export const ProductList = ({ products, isRefreshing, onRefresh }: ProductListProps) => {
  const { createProductModel } = useProductModel()

  const renderItem: ListRenderItem<Product> = ({ item: product }) => (
    <ProductCard testID='product-card' product={createProductModel(product)} />
  )

  return (
    <ProductListContainer>
      <FlatList
        data={products}
        numColumns={NUMBER_COLUMNS}
        keyExtractor={(product: Product) => product.id.toString()}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
      />
    </ProductListContainer>
  )
}
