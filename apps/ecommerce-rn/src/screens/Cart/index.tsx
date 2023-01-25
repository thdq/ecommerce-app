import { Text, Button } from 'react-native'
import styled from 'styled-components/native'
import { CartSummary } from '../../components/CartSummary'
import { useCart } from '../../hooks/use-cart'
import { CartSummaryModel } from '../../models/cart-summary'
import { ProductModel } from '../../models/product'

const Cart = ({ navigation }: any) => {
  const cart = useCart()
  const productsFromCart = cart.products as ProductModel[]

  const handleCheckout = () => {
    console.log('checkouted')
  }

  const handleBack = () => {
    navigation.navigate('Products')
  }

  return (
    <SafeAreaView>
      <CartContainer>
        <CartSummary summary={new CartSummaryModel(productsFromCart)} onCheckout={handleCheckout} />
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
