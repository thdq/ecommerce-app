import { ViewProps, View, Text, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { Button } from 'ui-rn'
import { useCart } from '../../hooks/use-cart'
import { ProductModel } from '../../models/product'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

type ProductCartProps = {
  product: ProductModel
} & ViewProps

export const ProductCart = ({ product }: ProductCartProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const { dispatchCart } = useCart()

  const handleRemoveFromCart = () => {
    dispatchCart({ payload: product, type: 'REMOVE' })
  }

  const handleShowLoading = () => {
    setIsImageLoading(false)
  }

  return (
    <CartContainer>
      <View>
        <Image onLoadEnd={handleShowLoading} source={{ uri: product.thumbnail }} />
        {isImageLoading && <ActivityIndicator size='small' color={'#22c55e'} />}
      </View>
      <ProductContainerView>
        <ProductInfoView>
          <ProductTitle>{product.title} </ProductTitle>
          <Text>
            {product.getFormattedPrice()} x {product.getAddedQuantity()} un.
          </Text>
          <ShippingInfoView>
            Frete:
            {product.isFreeShipping() ? (
              <ShippingFreeText> Grátis</ShippingFreeText>
            ) : (
              <Text> {product.getFormattedShippingTax()}</Text>
            )}
          </ShippingInfoView>
        </ProductInfoView>

        <Button onPress={handleRemoveFromCart} variant='danger' outline>
          <Ionicons
            style={{ color: '#b6253a' }}
            name='remove-circle-outline'
            size={28}
            color='black'
          />
        </Button>
      </ProductContainerView>
    </CartContainer>
  )
}

const CartContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  background-color: white;
  border-radius: 6px;
  margin: 4px 8px;
`
const ProductContainerView = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`

const ProductInfoView = styled.View``

const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

const ShippingInfoView = styled.Text`
  margin-top: auto;
`

const ShippingFreeText = styled.Text`
  font-weight: bold;
  color: #15803d;
`

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 6px;
`
