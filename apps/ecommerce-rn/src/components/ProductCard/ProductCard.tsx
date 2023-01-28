import { ActivityIndicator, ViewProps, Text } from 'react-native'
import { ProductModel } from '@app/models'
import { useCart } from '@app/hooks'
import { Ionicons } from '@expo/vector-icons'
import { Button } from 'ui-rn'
import { useState, memo } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {
  AddToCartView,
  CardContainer,
  Image,
  PriceText,
  ProductFooterView,
  ProductInfoView,
  ProductTitleText,
  RemoveToCartView,
  ShippingFreeText,
  ShippingInfoView,
  View,
} from './ProductCart.styles'

type ProductCardProps = {
  product: ProductModel
} & ViewProps

export const ProductCardComponent = ({ product, ...props }: ProductCardProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const { dispatchCart, products: productsFromCart } = useCart()

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
        <ProductTitleText>{product.title}</ProductTitleText>
        <PriceText> {product.getFormattedPrice()} </PriceText>
      </ProductInfoView>

      <ProductFooterView>
        {!product.isInCart(productsFromCart) ? (
          <>
            <ShippingInfoView>
              <MaterialIcons name='local-shipping' size={18} color='#22c55e' />
              {product.isFreeShipping() ? (
                <ShippingFreeText> Grátis</ShippingFreeText>
              ) : (
                <Text> {product.getFormattedShippingTax()}</Text>
              )}
            </ShippingInfoView>
            <AddToCartView>
              <Button testID='add-to-cart-button' size='small' outline onPress={handleAddToCart}>
                <Ionicons
                  style={{ color: '#22c55e' }}
                  name='add-circle-sharp'
                  size={34}
                  color='black'
                />
              </Button>
            </AddToCartView>
          </>
        ) : (
          <RemoveToCartView>
            <Button
              variant='danger'
              label='Remover do carrinho'
              onPress={handleRemoveFromCart}
            ></Button>
          </RemoveToCartView>
        )}
      </ProductFooterView>
    </CardContainer>
  )
}

const ProductCardMemo = memo(ProductCardComponent)

export { ProductCardMemo as ProductCard }
