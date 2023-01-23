import { screen } from '@testing-library/react-native'
import { productListMock } from '../../../../__mocks__/product-list'
import { ProductList } from '../../../components/ProductList'
import * as useGetProductsMock from '../../../hooks/use-get-products'
import { renderWithProviders } from '../../wrapper'

describe('<ProductList /> component', () => {
  it('should renders loading if list is fetching', async () => {
    renderWithProviders(<ProductList />)

    const loadingText = screen.queryByText('Carregando')
    expect(loadingText).toBeVisible()
  })
  it('should renders error if list fetch fails', async () => {
    jest.spyOn(useGetProductsMock, 'useGetProducts').mockReturnValueOnce({
      isLoading: false,
      error: new Error(),
      filteredList: null,
      isValidating: false,
      mutate: jest.fn(),
    })

    renderWithProviders(<ProductList />)

    const loadingText = screen.queryByText('Carregando')
    expect(loadingText).toBeNull()

    const errorComponent = screen.queryByTestId('error')
    expect(errorComponent).toBeVisible()
  })

  it('should renders product list', async () => {
    jest.spyOn(useGetProductsMock, 'useGetProducts').mockReturnValueOnce({
      isLoading: false,
      error: null,
      filteredList: productListMock,
      isValidating: false,
      mutate: jest.fn(),
    })

    renderWithProviders(<ProductList />)

    const productsCard = screen.queryAllByTestId('product-card')

    expect(productsCard.length).toEqual(productListMock?.products.length)
  })
})
