import { DescriptionText, EmptyCartContainer, TitleText } from './EmptyCart.styles'
import { ViewProps } from 'react-native'
import { Button } from 'ui-rn'

type EmptyCartProps = {
  onShowProducts: () => void
} & ViewProps

export const EmptyCart = ({ onShowProducts, ...props }: EmptyCartProps) => (
  <EmptyCartContainer {...props}>
    <TitleText>Seu Carrinho está vazio</TitleText>
    <DescriptionText>
      Comece adicionando um produto ao carrinho para realizar uma compra!
    </DescriptionText>
    <Button onPress={onShowProducts} label='Conferir produtos' />
  </EmptyCartContainer>
)
