import {
  CartSummaryContainer,
  ShippingFreeText,
  ShippingTextView,
  TotalPriceText,
  TotalTextView,
} from './CartSummary.styles'
import { Text } from 'react-native'
import { Button } from 'ui-rn'
import { CartSummaryModel } from '@app/models'

type CartSummaryProps = {
  onCheckout: () => void
  summary: CartSummaryModel
  isLoading?: boolean
}

export const CartSummary = ({ onCheckout, summary, isLoading }: CartSummaryProps) => {
  if (!summary.hasItens()) throw new Error('CartSummary: summary must have itens')

  return (
    <CartSummaryContainer>
      <ShippingTextView>
        <Text>Frete</Text>
        {summary.isFreeShipping() ? (
          <ShippingFreeText>Grátis</ShippingFreeText>
        ) : (
          <Text>{summary.getFormattedShippingTax()}</Text>
        )}
      </ShippingTextView>
      <TotalTextView>
        <Text>Total com frete</Text>
        <TotalPriceText>{summary.getFormattedTotalPriceWithShipping()}</TotalPriceText>
      </TotalTextView>
      <Button
        testID='checkout-button'
        loading={isLoading}
        loadingLabel='Finalizando compra'
        onPress={onCheckout}
        label='Finalizar compra'
        size='large'
      ></Button>
    </CartSummaryContainer>
  )
}
