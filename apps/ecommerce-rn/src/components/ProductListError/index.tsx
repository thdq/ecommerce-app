import { ViewProps } from 'react-native'
import styled from 'styled-components/native'

type ProductListErrorProps = {
  onTryAgain: () => void
} & ViewProps

export const ProductListError = ({ onTryAgain, ...props }: ProductListErrorProps) => {
  return (
    <ProductListErrorContainer {...props}>
      <MessageText>Ocorreu um erro ao recuperar lista de produtos</MessageText>
      <TryAgainButton onPress={onTryAgain}>
        <Text>Tentar novamente</Text>
      </TryAgainButton>
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

const Text = styled.Text`
  font-weight: bold;
  color: #14532d;
`

const TryAgainButton = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: #86efac;
  padding: 12px;
  border-radius: 6px;
`
