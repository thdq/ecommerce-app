import { screen, fireEvent } from '@testing-library/react-native'

import { productMock } from '../../../../__mocks__/product-list'
import { ProductCard } from '../../../components/ProductCard'
import { Product } from '../../../models/product'
import { renderWithProviders } from '../../wrapper'

const addToCartAssert = (product: Product) => {
  const addToCartButton = screen.getByText('Adicionar ao carrinho')
  expect(addToCartButton).toBeVisible()

  fireEvent(addToCartButton, 'press')
  const removeToCartButton = screen.getByText('Remover do carrinho')

  expect(removeToCartButton).toBeVisible()
  expect(product.inCart).toBeTruthy()
}

const removeToCartAssert = (product: Product) => {
  if (!product.inCart) throw new Error('function addToCartAssert must be called before it')

  const removeToCartButton = screen.getByText('Remover do carrinho')
  fireEvent(removeToCartButton, 'press')

  const addToCartButton = screen.getByText('Adicionar ao carrinho')
  expect(addToCartButton).toBeVisible()
  expect(product.inCart).toBeFalsy()
}

describe('<ProductCard /> component', () => {
  it('should renders card information', () => {
    const product = new Product(productMock(1))
    renderWithProviders(<ProductCard product={product} />)

    const titleText = screen.getByText(product.title)
    const priceText = screen.getByText(product.getFormattedPrice())
    const thumbnail = screen.getByTestId('product-cart-thumbnail')

    expect(titleText).toBeVisible()
    expect(priceText).toBeVisible()
    expect(thumbnail).toBeVisible()
  })

  it('should add to cart if press on button', () => {
    const product = new Product(productMock(1))
    renderWithProviders(<ProductCard product={product} />)

    addToCartAssert(product)
  })

  it('should remove to cart if press on button', () => {
    const product = new Product(productMock(1))
    renderWithProviders(<ProductCard product={product} />)

    addToCartAssert(product)
    removeToCartAssert(product)
  })
})
