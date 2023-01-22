import { Text } from 'react-native'
import { useGetProducts } from '../../hooks/use-get-products'

export const ProductList = () => {
  const { data: response } = useGetProducts()
  const products = response?.products

  return (
    <>
      <Text>{products?.length || 0}</Text>
      {Array.isArray(products) &&
        products.map((product) => {
          return <Text key={product.id}> {product.title} </Text>
        })}
    </>
  )
}
