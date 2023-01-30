import { FlatList, ListRenderItem } from 'react-native'
import { CartSummary, EmptyCart, ProductDetailCart } from '@app/components'
import { useDispatchCart, useCheckout, useCartSummary } from '@app/hooks'
import { ProductModel } from '@app/models'
import { CartContainer, TotalItensText, SafeAreaView } from './Cart.styles'

import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '@app/navigation/AppNavigation'

import { useTranslation } from 'react-i18next'

const Cart = () => {
  const { t } = useTranslation()

  const navigation = useNavigation<StackNavigationProps>()
  const { cartSummary } = useCartSummary()

  const { clearCart, removeFromCart } = useDispatchCart()

  const { purchase } = useCheckout()
  const [isPurchasing, setIsPurchasing] = useState(false)

  const handleRemoveFromCart = (product: ProductModel) => {
    removeFromCart(product)
  }

  const renderItem: ListRenderItem<ProductModel> = useCallback(
    ({ item: product }) => (
      <ProductDetailCart
        testID='product-detail-cart'
        onRemove={handleRemoveFromCart}
        product={product}
      />
    ),
    [],
  )

  const getKeyExtractor = (product: ProductModel) => product.id.toString()

  const handleCheckout = async () => {
    setIsPurchasing(true)
    const { isPurchased } = await purchase()
    setIsPurchasing(false)

    if (isPurchased) {
      clearCart()
      navigation.navigate('Products')
      navigation.navigate('Checkout')
    }
  }

  return (
    <SafeAreaView>
      {cartSummary.hasItens() ? (
        <CartContainer>
          <TotalItensText>
            {t('screens.cart.items_quantity', { quantity: cartSummary.totalItens })}
          </TotalItensText>
          <FlatList
            data={cartSummary.list}
            keyExtractor={getKeyExtractor}
            renderItem={renderItem}
          />
          <CartSummary isLoading={isPurchasing} summary={cartSummary} onCheckout={handleCheckout} />
        </CartContainer>
      ) : (
        <EmptyCart testID='empty-cart' onShowProducts={() => navigation.navigate('Products')} />
      )}
    </SafeAreaView>
  )
}

export { Cart }
