import { useGetProducts } from '../../hooks/use-get-products'
import { Product, ProductType } from '../../models/product'
import { ProductCard } from '../ProductCard'
import styled from 'styled-components/native'
import { ListRenderItem, FlatList as FlatListNative } from 'react-native'
import { ProductListError } from '../ProductListError'

export const ProductList = () => {
  const { filteredList, error, isLoading, mutate } = useGetProducts()
  const products = filteredList?.products ?? []

  const handleRetry = () => mutate()

  const renderItem: ListRenderItem<ProductType> = ({ item }) => (
    <ProductCard product={new Product(item)} />
  )

  return (
    <ProductListContainer>
      {products.length ? (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(product: ProductType) => product.id.toString()}
          renderItem={renderItem}
        />
      ) : isLoading ? (
        <Text>Carregando</Text>
      ) : error ? (
        <ProductListError onTryAgain={handleRetry} testID='error' />
      ) : null}
    </ProductListContainer>
  )
}

const ProductListContainer = styled.SafeAreaView`
  flex: 1;
`

const FlatList = styled.FlatList`
  flex: 1;
  margin: 0 4px 0 4px;
` as unknown as typeof FlatListNative

const Text = styled.Text``
