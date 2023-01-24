import { ViewProps } from 'react-native'
import styled from 'styled-components/native'
import { Button } from 'ui-rn'

type ProductListErrorProps = {
  onTryAgain: () => void
} & ViewProps

export const ProductListError = ({ onTryAgain, ...props }: ProductListErrorProps) => {
  return (
    <ProductListErrorContainer {...props}>
      <MessageText>Ocorreu um erro ao recuperar lista de produtos</MessageText>
      <Button onPress={onTryAgain} label='Tentar novamente' />
    </ProductListErrorContainer>
  )
}

const ProductListErrorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const MessageText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #444;
`
