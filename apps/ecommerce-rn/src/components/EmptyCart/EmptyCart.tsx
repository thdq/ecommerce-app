import { DescriptionText, EmptyCartContainer, TitleText } from './EmptyCart.styles'
import { ViewProps } from 'react-native'
import { Button } from 'ui-rn'

type EmptyCartProps = {
  onShowProducts: () => void
} & ViewProps

export const EmptyCart = ({ onShowProducts, ...props }: EmptyCartProps) => (
  <EmptyCartContainer {...props}>
    <TitleText>Seu carrinho está vazio</TitleText>
    <DescriptionText>
      Comece adicionando um produto ao carrinho para realizar uma compra!
    </DescriptionText>
    <Button testID='show-products-button' onPress={onShowProducts} label='Conferir produtos' />
  </EmptyCartContainer>
)
