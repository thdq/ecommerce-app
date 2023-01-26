import styled from 'styled-components/native'
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
        <ShippingLabelText>Frete</ShippingLabelText>
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

const CartSummaryContainer = styled.View`
  margin-top: auto;
  background-color: white;
  width: 100%;
  padding: 16px;
`

const ShippingLabelText = styled.Text``

const ShippingFreeText = styled.Text`
  font-weight: bold;
  color: #15803d;
`

const Text = styled.Text``

const TotalPriceText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

const ShippingTextView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`

const TotalTextView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`
