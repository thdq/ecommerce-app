import { FlatList, ListRenderItem } from 'react-native'
import styled from 'styled-components/native'
import { CartSummary } from '../../components/CartSummary'
import { EmptyCart } from '../../components/EmptyCart'
import { ProductCart } from '../../components/ProductCart'
import { useCart } from '../../hooks/use-cart'
import { useCheckout } from '../../hooks/use-checkout'
import { CartSummaryModel } from '../../models/cart-summary'
import { ProductModel } from '../../models/product'
import { useState } from 'react'

const Cart = ({ navigation }: any) => {
  const { products, dispatchCart } = useCart()
  const { purchase } = useCheckout()
  const [isPurchasing, setIsPurchasing] = useState(false)

  const productsFromCart = products as ProductModel[]

  const summaryList = new CartSummaryModel(productsFromCart)

  const renderItem: ListRenderItem<ProductModel> = ({ item: product }) => (
    <ProductCart product={product} />
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

const CartContainer = styled.View`
  height: 100%;
  background-color: #f3f4f6;
`

const TotalItensText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 16px 8px;
`

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`

export { Cart }
