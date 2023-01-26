import { screen, fireEvent } from '@testing-library/react-native'

import { productMock } from '../../../../__mocks__/product-list'
import { ProductCard } from '../../../components/ProductCard/ProductCard'
import { ProductModel } from '../../../models/product'
import { renderWithProviders } from '../../wrapper'

const addToCartAssert = () => {
  const addToCartButton = screen.getByTestId('add-to-cart-button')
  expect(addToCartButton).toBeVisible()
  fireEvent(addToCartButton, 'press')

  const removeToCartButton = screen.getByText('Remover do carrinho')
  expect(removeToCartButton).toBeVisible()
}

const removeToCartAssert = () => {
  const removeToCartButton = screen.getByText('Remover do carrinho')
  fireEvent(removeToCartButton, 'press')

  const addToCartButton = screen.getByTestId('add-to-cart-button')
  expect(addToCartButton).toBeVisible()
}

describe('<ProductCard /> component', () => {
  it('should renders card information', () => {
    const product = new ProductModel(productMock(1))
    renderWithProviders(<ProductCard product={product} />)

    const titleText = screen.getByText(product.title)
    const priceText = screen.getByText(product.getFormattedPrice())
    const thumbnail = screen.getByTestId('product-cart-thumbnail')

    expect(titleText).toBeVisible()
    expect(priceText).toBeVisible()
    expect(thumbnail).toBeVisible()
  })

  it('should add to cart if press on button', async () => {
    const product = new ProductModel(productMock(1))
    renderWithProviders(<ProductCard product={product} />)

    addToCartAssert()
  })

  it('should remove to cart if press on button', async () => {
    const product = new ProductModel(productMock(1))
    renderWithProviders(<ProductCard product={product} />)

    addToCartAssert()
    removeToCartAssert()
  })
})
