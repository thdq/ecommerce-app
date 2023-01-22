import { Text } from 'react-native'
import { Product } from '../../models/product'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return <Text> {product.id} </Text>
}
