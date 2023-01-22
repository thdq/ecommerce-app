import { useGetProducts } from '../../hooks/use-get-products'
import { Product } from '../../models/product'
import { ProductCard } from '../ProductCard'
import styled from 'styled-components/native'

export const ProductList = () => {
  const { filteredList } = useGetProducts()
  const products = filteredList?.products ?? []

  return (
    <ProductListContainer>
      {Array.isArray(products) &&
        products.map((product) => {
          return <ProductCard key={product.id} product={new Product(product)} />
        })}
    </ProductListContainer>
  )
}

const ProductListContainer = styled.ScrollView``
