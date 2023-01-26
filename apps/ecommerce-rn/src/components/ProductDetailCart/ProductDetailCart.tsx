import { ViewProps, View, Text, ActivityIndicator } from 'react-native'
import { Button } from 'ui-rn'
import { useCart } from '@app/hooks'
import { ProductModel } from '@app/models'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import {
  CartContainer,
  Image,
  ProductContainerView,
  ProductContentView,
  ProductHeaderView,
  ProductInfoView,
  ProductTitle,
  ShippingFreeText,
  ShippingInfoView,
} from './ProductDetailCart.styles'

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
        <ProductHeaderView>
          <ProductTitle numberOfLines={1}>{product.title}</ProductTitle>
        </ProductHeaderView>
        <ProductContentView>
          <View>
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
          </View>
          <ProductInfoView>
            <Button onPress={handleRemoveFromCart} variant='danger' outline>
              <Ionicons
                style={{ color: '#b6253a' }}
                name='remove-circle-outline'
                size={28}
                color='black'
              />
            </Button>
          </ProductInfoView>
        </ProductContentView>
      </ProductContainerView>
    </CartContainer>
  )
}
