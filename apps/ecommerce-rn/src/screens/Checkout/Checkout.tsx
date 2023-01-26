import { ViewProps } from 'react-native'
import { CheckoutContainer, TitleText } from './Checkout.styles'
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
