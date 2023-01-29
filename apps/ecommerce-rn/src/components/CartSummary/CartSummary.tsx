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
import { useTranslation } from 'react-i18next'

type CartSummaryProps = {
  onCheckout: () => void
  summary: CartSummaryModel
  isLoading?: boolean
}

export const CartSummary = ({ onCheckout, summary, isLoading }: CartSummaryProps) => {
  const { t } = useTranslation()

  if (!summary.hasItens()) throw new Error('CartSummary: summary must have itens')

  return (
    <CartSummaryContainer>
      <ShippingTextView>
        <Text>{t('components.cart_summary.shipping')}</Text>
        {summary.isFreeShipping() ? (
          <ShippingFreeText>{t('components.cart_summary.free_shipping')}</ShippingFreeText>
        ) : (
          <Text>{summary.getFormattedShippingTax()}</Text>
        )}
      </ShippingTextView>
      <TotalTextView>
        <Text>{t('components.cart_summary.total_with_shipping')}</Text>
        <TotalPriceText>{summary.getFormattedTotalPriceWithShipping()}</TotalPriceText>
      </TotalTextView>
      <Button
        testID='checkout-button'
        loading={isLoading}
        loadingLabel={t('components.cart_summary.purchasing') ?? ''}
        onPress={onCheckout}
        label={t('components.cart_summary.purchase') ?? ''}
        size='large'
      ></Button>
    </CartSummaryContainer>
  )
}
