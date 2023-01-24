import { Button, Text, ViewProps } from 'react-native'
import { Product } from '../../models/product'
import styled from 'styled-components/native'
import { useCart } from '../../hooks/use-cart'

type ProductCardProps = {
  product: Product
} & ViewProps

export const ProductCard = ({ product, ...props }: ProductCardProps) => {
  const { addToCart, removeFromCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(product)
  }

  return (
    <CardContainer {...props}>
      <Image testID='product-cart-thumbnail' source={{ uri: product.thumbnail }} />
      <Text> {product.title} </Text>
      <Text> {product.getFormattedPrice()} </Text>
      {!product.inCart ? (
        <Button onPress={handleAddToCart} title='Adicionar ao carrinho'></Button>
      ) : (
        <Button title='Remover do carrinho' onPress={handleRemoveFromCart}></Button>
      )}
    </CardContainer>
  )
}

const CardContainer = styled.View`
  min-height: 200px;
  padding: 4px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 8px;
  margin: 8px;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.1;
  elevation: 3;
`

const Image = styled.Image`
  width: 50px;
  height: 50px;
`
