import { screen } from '@testing-library/react-native'

import { productMock } from '../../../../__mocks__/product-list'
import { ProductCard } from '../../../components/ProductCard'
import { Product } from '../../../models/product'
import { renderWithProviders } from '../../wrapper'

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
})
