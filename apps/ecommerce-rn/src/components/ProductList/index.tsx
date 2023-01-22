import { Text } from 'react-native'
import { useGetProducts } from '../../hooks/use-get-products'
import { Product } from '../../models/product'
import { ProductCard } from '../ProductCard'

export const ProductList = () => {
  const { filteredList } = useGetProducts()
  const products = filteredList?.products ?? []

  return (
    <>
      <Text>{products?.length || 0}</Text>
      {Array.isArray(products) &&
        products.map((product) => {
          return <ProductCard key={product.id} product={new Product(product)} />
        })}
    </>
  )
}
