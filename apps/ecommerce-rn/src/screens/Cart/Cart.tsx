import { FlatList, ListRenderItem } from 'react-native'
import { CartSummary, EmptyCart, ProductDetailCart } from '@app/components'
import { useCart, useCheckout } from '@app/hooks'
import { ProductModel } from '@app/models'
import { CartContainer, TotalItensText, SafeAreaView } from './Cart.styles'

import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '@app/navigation/AppNavigation'
import { useAtomValue } from 'jotai'
import { CartSummaryModelAtom } from '@app/store'

const Cart = () => {
  const navigation = useNavigation<StackNavigationProps>()
  const cartSummary = useAtomValue(CartSummaryModelAtom)

  const { clearCart, removeFromCart } = useCart()

  const { purchase } = useCheckout()
  const [isPurchasing, setIsPurchasing] = useState(false)

  const handleRemoveFromCart = (product: ProductModel) => {
    removeFromCart(product)
  }

  const renderItem: ListRenderItem<ProductModel> = useCallback(
    ({ item: product }) => <ProductDetailCart onRemove={handleRemoveFromCart} product={product} />,
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
          <TotalItensText>Itens no carrinho: {cartSummary.totalItens}</TotalItensText>
          <FlatList
            data={cartSummary.list}
            keyExtractor={getKeyExtractor}
            renderItem={renderItem}
          />
          <CartSummary isLoading={isPurchasing} summary={cartSummary} onCheckout={handleCheckout} />
        </CartContainer>
      ) : (
        <EmptyCart onShowProducts={() => navigation.navigate('Products')} />
      )}
    </SafeAreaView>
  )
}

export { Cart }
