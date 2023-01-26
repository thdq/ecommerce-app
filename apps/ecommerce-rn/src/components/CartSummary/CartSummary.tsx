import {
  CartSummaryContainer,
  ShippingFreeText,
  ShippingTextView,
  TotalPriceText,
  TotalTextView,
} from './CartSummary.styles'
import { Text } from 'react-native'
import { Button } from 'ui-rn'
import { CartSummaryModel } from '../../models/cart-summary'

type CartSummaryProps = {
  onCheckout: () => void
  summary: CartSummaryModel
  isLoading?: boolean
}

export const CartSummary = ({ onCheckout, summary, isLoading }: CartSummaryProps) => {
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
        loading={isLoading}
        loadingLabel='Finalizando compra'
        onPress={onCheckout}
        label='Finalizar compra'
        size='large'
      ></Button>
    </CartSummaryContainer>
  )
}
