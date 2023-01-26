import { screen } from '@testing-library/react-native'
import { productListMock } from '@mocks/product-list'
import { ProductList } from '@app/components'
import * as useGetProductsMock from '@app/hooks/use-get-products'
import { renderWithProviders } from '@app/__tests__/wrapper'

describe('<ProductList /> component', () => {
  it('should renders loading if list is fetching', async () => {
    renderWithProviders(<ProductList />)

    const loadingSkeleton = screen.queryByTestId('skeleton-loading')
    expect(loadingSkeleton).toBeVisible()
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

    const loadingSkeleton = screen.queryByTestId('skeleton-loading')
    expect(loadingSkeleton).toBeNull()

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
