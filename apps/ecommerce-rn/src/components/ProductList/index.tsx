import { useGetProducts } from '../../hooks/use-get-products'
import { Product, ProductType } from '../../models/product'
import { ProductCard } from '../ProductCard'
import styled from 'styled-components/native'
import { ListRenderItem, FlatList as FlatListNative } from 'react-native'
import { ProductListError } from '../ProductListError'
import { SkeletonCard } from 'ui-rn'

const NUMBER_COLUMNS = 2
const SKELETON_FAKE_LIST = [...Array(6).keys()]

export const ProductList = () => {
  const { filteredList, error, isLoading, mutate } = useGetProducts()
  const products = filteredList?.products ?? []

  const handleRetry = () => mutate()

  const renderSkeleton = () => <SkeletonCard />
  const renderItem: ListRenderItem<ProductType> = ({ item }) => (
    <ProductCard product={new Product(item)} />
  )

  return (
    <ProductListContainer>
      {products.length ? (
        <FlatList
          data={products}
          numColumns={NUMBER_COLUMNS}
          keyExtractor={(product: ProductType) => product.id.toString()}
          renderItem={renderItem}
        />
      ) : isLoading ? (
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

const ProductListContainer = styled.SafeAreaView`
  flex: 1;
`

const FlatList = styled.FlatList`
  flex: 1;
  margin: 0 4px 0 4px;
` as unknown as typeof FlatListNative
