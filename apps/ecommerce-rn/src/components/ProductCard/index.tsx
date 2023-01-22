import { Button, Text } from 'react-native'
import { Product } from '../../models/product'
import styled from 'styled-components/native'
import { useAddToCart } from '../../hooks/use-add-to-cart'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useAddToCart()

  const handleAddToCart = () => {
    addToCart({
      title: product.title,
      id: product.id,
      price: product.price,
      quantity: 1,
      thumbnail: product.thumbnail,
    })
  }

  return (
    <CardContainer>
      <Image source={{ uri: product.thumbnail }} />
      <Text> {product.title} </Text>
      <Text> {product.getFormattedPrice()} </Text>
      <Button onPress={handleAddToCart} title='Adicionar ao carrinho'></Button>
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
