import { CartSummary } from '@app/components'
import { renderWithProviders } from '@app/__tests__/wrapper'
import { cartSummaryMock } from '@mocks/cart-summary'
import { screen } from '@testing-library/react-native'

const onCheckoutMock = jest.fn()

describe('<CartSummary /> component', () => {
  test('should renders', () => {
    renderWithProviders(<CartSummary summary={cartSummaryMock} onCheckout={onCheckoutMock} />)

    expect(screen.getByText('Frete')).toBeVisible()
    expect(screen.getByText(cartSummaryMock.getFormattedShippingTax())).toBeVisible()
    expect(screen.getByText('Total com frete')).toBeVisible()
    expect(screen.getByText(cartSummaryMock.getFormattedTotalPriceWithShipping())).toBeVisible()
  })
})
