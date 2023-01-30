import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react-native'
import { Cart } from '@app/screens'
import { renderWithProviders, translate } from '@app/__tests__/wrapper'
import { cartSummaryModelAtom } from '@app/store'
import { cartSummaryMock } from '@app/../__mocks__/cart-summary-model'

const t = (message: string, values?: object) => translate(message, { ...values })

describe('Cart screen', () => {
  it('should show empty cart if cart is empty', () => {
    renderWithProviders(<Cart />)

    expect(screen.getByTestId('empty-cart')).toBeVisible()
  })

  it('should show cart list if cart is not empty', () => {
    renderWithProviders(<Cart />, [[cartSummaryModelAtom, cartSummaryMock]])

    const products = screen.getAllByTestId('product-detail-cart')
    const totalItens = screen.getByText(
      t('screens.cart.items_quantity', { quantity: cartSummaryMock.list.length }),
    )

    expect(totalItens).toBeVisible()
    expect(products.length).toEqual(cartSummaryMock.list.length)
  })

  it('should show total price and shipping taxs', () => {
    renderWithProviders(<Cart />, [[cartSummaryModelAtom, cartSummaryMock]])

    if (cartSummaryMock.isFreeShipping()) {
      expect(screen.getByText(t('screens.cart.free_shipping'))).toBeVisible()
    } else {
      expect(screen.getByTestId('total-shipping-tax')).toBeVisible()
    }

    expect(screen.getByText(cartSummaryMock.getFormattedTotalPriceWithShipping())).toBeVisible()
  })

  it('should show purchasing text if checkout button click', () => {
    renderWithProviders(<Cart />, [[cartSummaryModelAtom, cartSummaryMock]])

    const checkoutButton = screen.getByTestId('checkout-button')

    fireEvent.press(checkoutButton)

    expect(screen.getByText(t('components.cart_summary.purchasing'))).toBeVisible()
  })
})
