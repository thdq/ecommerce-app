import { FlatList, ListRenderItem } from 'react-native'
import styled from 'styled-components/native'
import { CartSummary } from '../../components/CartSummary'
import { ProductCart } from '../../components/ProductCart'
import { useCart } from '../../hooks/use-cart'
import { CartSummaryModel } from '../../models/cart-summary'
import { ProductModel } from '../../models/product'

const Cart = () => {
  const cart = useCart()
  const productsFromCart = cart.products as ProductModel[]

  const summaryList = new CartSummaryModel(productsFromCart)

  const renderItem: ListRenderItem<ProductModel> = ({ item: product }) => (
    <ProductCart product={product} />
  )

  const handleCheckout = () => {
    console.log('checkouted')
  }

  return (
    <SafeAreaView>
      <CartContainer>
        <FlatList
          data={summaryList.list}
          keyExtractor={(product: ProductModel) => product.id.toString()}
          renderItem={renderItem}
        />
        <CartSummary summary={summaryList} onCheckout={handleCheckout} />
      </CartContainer>
    </SafeAreaView>
  )
}

const CartContainer = styled.View`
  height: 100%;
  background-color: #f3f4f6;
`

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`

export { Cart }
