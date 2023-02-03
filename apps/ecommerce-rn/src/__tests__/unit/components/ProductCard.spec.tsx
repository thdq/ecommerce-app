import { screen, fireEvent } from '@testing-library/react-native'

import { productMock } from '@mocks/product-list'
import { ProductCard, ProductCardProps } from '@app/components'
import { ProductModel } from '@app/models'
import { renderWithProviders, translate } from '@app/__tests__/wrapper'

const product = new ProductModel(productMock(1))
const productCardPropsMock: ProductCardProps = {
  inCart: false,
  product,
  onAddToCart: jest.fn(),
  onRemoveFromCart: jest.fn(),
}

const TRANSALATE_PREFIX = 'components.product_card'

const t = (message: string) => translate(`${TRANSALATE_PREFIX}.${message}`)

const addToCartAssert = () => {
  const addToCartButton = screen.getByTestId('add-to-cart-button')
  expect(addToCartButton).toBeVisible()
  fireEvent(addToCartButton, 'press')

  expect(productCardPropsMock.onAddToCart).toBeCalledWith(product)
}

const removeToCartAssert = () => {
  const removeToCartButton = screen.getByText(t('remove'))
  fireEvent(removeToCartButton, 'press')

  expect(productCardPropsMock.onRemoveFromCart).toBeCalledWith(product)
}

describe('<ProductCard /> component', () => {
  it('should renders card information', () => {
    renderWithProviders(<ProductCard {...productCardPropsMock} />)

    const titleText = screen.getByText(product.title)
    const priceText = screen.getByText(product.getFormattedPrice())
    const thumbnail = screen.getByTestId('product-cart-thumbnail')

    expect(titleText).toBeVisible()
    expect(priceText).toBeVisible()
    expect(thumbnail).toBeVisible()
  })

  it('should call onAddToCard if press on button', async () => {
    renderWithProviders(<ProductCard {...productCardPropsMock} />)
    addToCartAssert()
  })

  it('should call onRemoveFromCart if press on button', async () => {
    renderWithProviders(<ProductCard {...productCardPropsMock} inCart={true} />)

    removeToCartAssert()
  })
})
