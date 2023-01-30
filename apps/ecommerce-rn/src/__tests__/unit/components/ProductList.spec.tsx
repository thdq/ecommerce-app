import { screen } from '@testing-library/react-native'
import { productListModelMock } from '@mocks/product-list'
import { ProductList } from '@app/components'
import { renderWithProviders } from '@app/__tests__/wrapper'

const productListMockProps = {
  products: productListModelMock?.products ?? [],
  isRefreshing: false,
  onRefresh: jest.fn(),
}

describe('<ProductList /> component', () => {
  it('should renders product list', () => {
    renderWithProviders(<ProductList {...productListMockProps} />)

    const productsCard = screen.getAllByTestId('product-card')

    expect(productsCard.length).toEqual(productListModelMock?.products.length)
  })
})
