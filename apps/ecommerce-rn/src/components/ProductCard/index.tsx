import { ActivityIndicator, Text, ViewProps } from 'react-native'
import { Product } from '../../models/product'
import styled from 'styled-components/native'
import { useCart } from '../../hooks/use-cart'
import { Ionicons } from '@expo/vector-icons'
import { Button } from 'ui-rn'
import { useState } from 'react'

type ProductCardProps = {
  product: Product
} & ViewProps

export const ProductCard = ({ product, ...props }: ProductCardProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const { dispatchCart } = useCart()

  const handleAddToCart = () => {
    dispatchCart({ type: 'ADD', payload: product })
  }

  const handleRemoveFromCart = () => {
    dispatchCart({ type: 'REMOVE', payload: product })
  }

  const handleShowLoading = () => {
    setIsImageLoading(false)
  }

  return (
    <CardContainer {...props}>
      <View>
        <Image
          resizeMode='cover'
          testID='product-cart-thumbnail'
          source={{ uri: product.thumbnail }}
          onLoadEnd={handleShowLoading}
        />
        {isImageLoading && <ActivityIndicator size='small' color={'#22c55e'} />}
      </View>
      <ProductInfoView>
        <ProductTitleText> {product.title} </ProductTitleText>
        <PriceText> {product.getFormattedPrice()} </PriceText>
      </ProductInfoView>

      {!product.isInCart() ? (
        <AddToCartView>
          <Button size='small' outline onPress={handleAddToCart}>
            <Ionicons
              style={{ color: '#22c55e' }}
              name='add-circle-sharp'
              size={40}
              color='black'
            />
          </Button>
        </AddToCartView>
      ) : (
        <RemoveToCartView>
          <Button variant='danger' size='small' onPress={handleRemoveFromCart}>
            <Text>Remover do carrinho</Text>
            <Ionicons
              style={{ marginLeft: 8 }}
              name='ios-remove-circle-sharp'
              size={26}
              color='black'
            />
          </Button>
        </RemoveToCartView>
      )}
    </CardContainer>
  )
}

const CardContainer = styled.View`
  width: 100%;
  padding: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  margin: 8px;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.1;
  elevation: 3;
`

const Image = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 8px;
`

const AddToCartView = styled.View`
  color: '#22c55e';
  margin-left: auto;
`

const RemoveToCartView = styled.View`
  margin-bottom: 15px;
`

const ProductInfoView = styled.View`
  width: 100%;
  margin: 12px 0;
`

const ProductTitleText = styled.Text`
  font-size: 16px;
  color: #374151;
  margin-bottom: 2px;
`

const PriceText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #111827;
`
const View = styled.View`
  width: 100%;
`
