import { screen } from '@testing-library/react-native'

import { productListMock } from '../../../../__mocks__/product-list'
import { ProductCard } from '../../../components/ProductCard'
import { renderWithProviders } from '../../wrapper'

describe('<ProductCard /> component', () => {
  it('should renders', () => {
    const product = productListMock?.products.at(0)
    renderWithProviders(<ProductCard product={product} />)

    screen.debug()
  })
})
