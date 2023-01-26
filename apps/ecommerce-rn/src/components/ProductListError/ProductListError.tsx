import { ViewProps } from 'react-native'
import { Button } from 'ui-rn'
import { MessageText, ProductListErrorContainer } from './ProductListError.styles'

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
