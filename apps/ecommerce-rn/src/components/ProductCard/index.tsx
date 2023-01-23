import { Button, Text } from 'react-native'
import { Product } from '../../models/product'
import styled from 'styled-components/native'
import { useCart } from '../../hooks/use-cart'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, removeFromCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(product)
  }

  return (
    <CardContainer>
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
  flex: 1;
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
`

const Image = styled.Image`
  width: 50px;
  height: 50px;
`
