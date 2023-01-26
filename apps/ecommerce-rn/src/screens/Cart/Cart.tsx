import { FlatList, ListRenderItem } from 'react-native'
import { CartSummary, EmptyCart, ProductDetailCart } from '@app/components'
import { useCart, useCheckout } from '@app/hooks'
import { CartSummaryModel, ProductModel } from '@app/models'
import { CartContainer, TotalItensText, SafeAreaView } from './Cart.styles'

import { useState } from 'react'

const Cart = ({ navigation }: any) => {
  const { products, dispatchCart } = useCart()
  const { purchase } = useCheckout()
  const [isPurchasing, setIsPurchasing] = useState(false)

  const productsFromCart = products as ProductModel[]

  const summaryList = new CartSummaryModel(productsFromCart)

  const renderItem: ListRenderItem<ProductModel> = ({ item: product }) => (
    <ProductDetailCart product={product} />
  )

  const handleCheckout = async () => {
    setIsPurchasing(true)
    const { isPurchased } = await purchase()
    setIsPurchasing(false)

    if (isPurchased) {
      const payload = {} as ProductModel
      dispatchCart({ type: 'RESET', payload })
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
