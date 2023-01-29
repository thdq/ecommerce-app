import { ActivityIndicator, ViewProps, Text } from 'react-native'
import { ProductModel } from '@app/models'
import { useCart } from '@app/hooks'
import { Ionicons } from '@expo/vector-icons'
import { Button } from 'ui-rn'
import { useState, memo } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'
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
  inCart: boolean
} & ViewProps

export const ProductCardComponent = ({ product, inCart, ...props }: ProductCardProps) => {
  const { t } = useTranslation()

  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isOnCart, setInCart] = useState(inCart)

  const { addToCart, removeFromCart } = useCart()

  const handleAddToCart = () => {
    setInCart(true)
    addToCart(product)
  }

  const handleRemoveFromCart = () => {
    setInCart(false)
    removeFromCart(product)
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
        {!isOnCart ? (
          <>
            <ShippingInfoView>
              <MaterialIcons name='local-shipping' size={18} color='#22c55e' />
              {product.isFreeShipping() ? (
                <ShippingFreeText>{t('components.product_card.free_shipping')}</ShippingFreeText>
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
              label={t('components.product_card.remove') ?? ''}
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
