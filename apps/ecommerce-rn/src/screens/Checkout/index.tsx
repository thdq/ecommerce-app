import { ViewProps } from 'react-native'
import styled from 'styled-components/native'
import { Button } from 'ui-rn'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type CheckoutProps = {
  navigation: any
} & ViewProps

export const Checkout = ({ navigation, ...props }: CheckoutProps) => {
  return (
    <CheckoutContainer {...props}>
      <MaterialCommunityIcons name='cart-heart' size={120} color='#14532d' />
      <TitleText>Sua compra foi aprovada!</TitleText>
      <Button onPress={() => navigation.navigate('Products')} label='Conferir mais ofertas' />
    </CheckoutContainer>
  )
}

const CheckoutContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f3f4f6;
  padding: 0 32px;
`
const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 16px;
`
