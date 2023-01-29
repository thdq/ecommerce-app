import { CartSummary } from '@app/components'
import { renderWithProviders, translate } from '@app/__tests__/wrapper'
import { cartSummaryMock } from '@mocks/cart-summary-model'
import { fireEvent, screen } from '@testing-library/react-native'

const TRANSALATE_PREFIX = 'components.cart_summary'

const t = (message: string) => translate(`${TRANSALATE_PREFIX}.${message}`)

const onCheckoutMock = jest.fn()

describe('<CartSummary /> component', () => {
  it('should renders', () => {
    renderWithProviders(<CartSummary summary={cartSummaryMock} onCheckout={onCheckoutMock} />)

    expect(screen.getByText(t('shipping'))).toBeVisible()
    expect(screen.getByText(cartSummaryMock.getFormattedShippingTax())).toBeVisible()
    expect(screen.getByText(t('total_with_shipping'))).toBeVisible()
    expect(screen.getByText(cartSummaryMock.getFormattedTotalPriceWithShipping())).toBeVisible()
  })

  it('should call onCheckout on finish press', () => {
    renderWithProviders(<CartSummary summary={cartSummaryMock} onCheckout={onCheckoutMock} />)

    fireEvent.press(screen.getByTestId('checkout-button'))
    expect(onCheckoutMock).toBeCalled()
  })

  it('should not call onCheckout on finish press if is loading', () => {
    renderWithProviders(
      <CartSummary isLoading={true} summary={cartSummaryMock} onCheckout={onCheckoutMock} />,
    )

    fireEvent.press(screen.getByTestId('checkout-button'))
    expect(onCheckoutMock).not.toBeCalled()
  })
})
