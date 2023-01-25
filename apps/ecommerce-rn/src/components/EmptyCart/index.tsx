import { ViewProps } from 'react-native'
import styled from 'styled-components/native'
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

const EmptyCartContainer = styled.View`
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
  margin-bottom: 8px;
`

const DescriptionText = styled.Text`
  text-align: center;
  margin-bottom: 32px;
`
