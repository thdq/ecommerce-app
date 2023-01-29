import { ViewProps, View, Text, ActivityIndicator } from 'react-native'
import { Button } from 'ui-rn'
import { ProductModel } from '@app/models'
import { Ionicons } from '@expo/vector-icons'
import { useState, memo } from 'react'
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
import { useTranslation } from 'react-i18next'

type ProductCartProps = {
  product: ProductModel
  onRemove: (product: ProductModel) => void
} & ViewProps

export const ProductDetailCartComponent = ({ product, onRemove }: ProductCartProps) => {
  const { t } = useTranslation()

  const [isImageLoading, setIsImageLoading] = useState(true)

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
              {t('components.product_detail_cart.shipping')}
              {product.isFreeShipping() ? (
                <ShippingFreeText>
                  {' ' + t('components.product_detail_cart.free_shipping')}
                </ShippingFreeText>
              ) : (
                <Text> {product.getFormattedShippingTax()}</Text>
              )}
            </ShippingInfoView>
          </View>
          <ProductInfoView>
            <Button
              testID='remove-from-cart-button'
              onPress={() => onRemove(product)}
              variant='danger'
              outline
            >
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

const memoized = memo(ProductDetailCartComponent)

export { memoized as ProductDetailCart }
