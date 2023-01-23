import { useGetProducts } from '../../hooks/use-get-products'
import { Product } from '../../models/product'
import { ProductCard } from '../ProductCard'
import styled from 'styled-components/native'

export const ProductList = () => {
  const { filteredList, error, isLoading } = useGetProducts()
  const products = filteredList?.products ?? []

  return (
    <ProductListContainer>
      {products.length ? (
        products.map((product) => {
          return (
            <ProductCard testID='product-card' key={product.id} product={new Product(product)} />
          )
        })
      ) : error ? (
        <Text testID='error'>Ocorreu um erro ao carregar a lista</Text>
      ) : isLoading ? (
        <Text>Carregando</Text>
      ) : (
        ''
      )}
    </ProductListContainer>
  )
}

const ProductListContainer = styled.ScrollView``
const Text = styled.Text``
