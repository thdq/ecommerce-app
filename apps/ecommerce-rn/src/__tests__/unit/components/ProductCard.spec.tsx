import { screen, fireEvent } from '@testing-library/react-native'

import { productMock } from '@mocks/product-list'
import { ProductCard } from '@app/components'
import { ProductModel } from '@app/models'
import { renderWithProviders, translate } from '@app/__tests__/wrapper'

const TRANSALATE_PREFIX = 'components.product_card'

const t = (message: string) => translate(`${TRANSALATE_PREFIX}.${message}`)

const addToCartAssert = () => {
  const addToCartButton = screen.getByTestId('add-to-cart-button')
  expect(addToCartButton).toBeVisible()
  fireEvent(addToCartButton, 'press')

  const removeToCartButton = screen.getByText(t('remove'))
  expect(removeToCartButton).toBeVisible()
}

const removeToCartAssert = () => {
  const removeToCartButton = screen.getByText(t('remove'))
  fireEvent(removeToCartButton, 'press')

  const addToCartButton = screen.getByTestId('add-to-cart-button')
  expect(addToCartButton).toBeVisible()
}

describe('<ProductCard /> component', () => {
  it('should renders card information', () => {
    const product = new ProductModel(productMock(1))
    renderWithProviders(<ProductCard inCart={false} product={product} />)

    const titleText = screen.getByText(product.title)
    const priceText = screen.getByText(product.getFormattedPrice())
    const thumbnail = screen.getByTestId('product-cart-thumbnail')

    expect(titleText).toBeVisible()
    expect(priceText).toBeVisible()
    expect(thumbnail).toBeVisible()
  })

  it('should add to cart if press on button', async () => {
    const product = new ProductModel(productMock(1))
    renderWithProviders(<ProductCard inCart={false} product={product} />)

    addToCartAssert()
  })

  it('should remove to cart if press on button', async () => {
    const product = new ProductModel(productMock(1))
    renderWithProviders(<ProductCard inCart={false} product={product} />)

    addToCartAssert()
    removeToCartAssert()
  })
})
