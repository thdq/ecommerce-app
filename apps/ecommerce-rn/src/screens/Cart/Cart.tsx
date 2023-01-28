import { FlatList, ListRenderItem } from 'react-native'
import { CartSummary, EmptyCart, ProductDetailCart } from '@app/components'
import { useCart, useCartSummaryModel, useCheckout } from '@app/hooks'
import { ProductModel } from '@app/models'
import { CartContainer, TotalItensText, SafeAreaView } from './Cart.styles'

import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '@app/navigation/AppNavigation'

const Cart = () => {
  const navigation = useNavigation<StackNavigationProps>()

  const { clearCart, removeFromCart } = useCart()
  const { createCartSummaryModel } = useCartSummaryModel()
  const { purchase } = useCheckout()
  const [isPurchasing, setIsPurchasing] = useState(false)

  const summaryList = createCartSummaryModel([] as ProductModel[])

  const handleRemoveFromCart = (product: ProductModel) => {
    removeFromCart(product)
  }

  const renderItem: ListRenderItem<ProductModel> = ({ item: product }) => (
    <ProductDetailCart onRemove={handleRemoveFromCart} product={product} />
  )

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
      {summaryList.hasItens() ? (
        <CartContainer>
          <TotalItensText>Itens no carrinho: {summaryList.totalItens}</TotalItensText>
          <FlatList
            data={summaryList.list}
            keyExtractor={(product: ProductModel) => product.id.toString()}
            renderItem={renderItem}
          />
          <CartSummary isLoading={isPurchasing} summary={summaryList} onCheckout={handleCheckout} />
        </CartContainer>
      ) : (
        <EmptyCart onShowProducts={() => navigation.navigate('Products')} />
      )}
    </SafeAreaView>
  )
}

export { Cart }
