import { ProductDetailCart } from '@app/components'
import { renderWithProviders } from '@app/__tests__/wrapper'
import { screen, fireEvent } from '@testing-library/react-native'
import { productModel } from '@mocks/product-model'

const onRemoveMock = jest.fn()

describe('<ProductDetailCart /> component', () => {
  it('should renders', () => {
    renderWithProviders(<ProductDetailCart product={productModel} onRemove={onRemoveMock} />)

    expect(screen.getByText(productModel.title)).toBeVisible()
    expect(screen.getByText(productModel.getFormattedPrice(), { exact: false })).toBeVisible()

    if (productModel.isFreeShipping()) {
      expect(screen.getByText('Frete: Grátis')).toBeVisible()
    } else {
      expect(
        screen.getByText(productModel.getFormattedShippingTax(), { exact: false }),
      ).toBeVisible()
    }
  })

  it('should call onRemove when remove button is pressed', () => {
    renderWithProviders(<ProductDetailCart product={productModel} onRemove={onRemoveMock} />)

    fireEvent.press(screen.getByTestId('remove-from-cart-button'))

    expect(onRemoveMock).toBeCalledWith(productModel)
  })
})
