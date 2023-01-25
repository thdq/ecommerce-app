import { Button, Text } from 'react-native'
import styled from 'styled-components/native'
import { useCart } from '../../hooks/use-cart'
import { ProductModel } from '../../models/product'

type ProductCartProps = {
  product: ProductModel
}

export const ProductCart = ({ product }: ProductCartProps) => {
  const { removeFromCart } = useCart()

  const handleRemoveFromCart = () => {
    removeFromCart(product)
  }

  return (
    <CartContainer>
      <Image source={{ uri: product.thumbnail }} />
      <Text> {product.title} </Text>
      <Text>
        {product.getFormattedPrice()} x {product.getAddedQuantity()} un.
      </Text>
      <Button title='Remover do carrinho' onPress={handleRemoveFromCart}></Button>
    </CartContainer>
  )
}

const CartContainer = styled.View`
  flex: 1;
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
`

const Image = styled.Image`
  width: 50px;
  height: 50px;
`
