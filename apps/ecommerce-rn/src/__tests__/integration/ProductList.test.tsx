import { Products } from '@app/screens'

import { act, screen } from '@testing-library/react-native'
import { renderWithProviders } from '../wrapper'
import * as hooks from '@app/hooks/use-get-products'
import { productListModelMock, ProductListModelType } from '@app/../__mocks__/product-list'

const mockUseGetProductsValue = {
  filteredList: productListModelMock as ProductListModelType,
  isLoading: true,
  mutate: jest.fn(),
  error: false,
  isValidating: false,
}

describe('ProductList screen', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should show loading list if is fetching', () => {
    renderWithProviders(<Products />)

    expect(screen.getByTestId('product-list-loading')).toBeVisible()
  })

  it('should show list after fetching', async () => {
    jest.spyOn(hooks, 'useGetProducts').mockReturnValue({
      ...mockUseGetProductsValue,
      isLoading: false,
    })

    renderWithProviders(<Products />)

    expect(screen.getByTestId('product-list')).toBeVisible()
  })

  it('should show error if error', () => {
    jest.spyOn(hooks, 'useGetProducts').mockReturnValue({
      ...mockUseGetProductsValue,
      filteredList: {
        ...mockUseGetProductsValue.filteredList,
        products: undefined,
      },
      isLoading: false,
      error: true,
    })

    renderWithProviders(<Products />)

    expect(screen.getByTestId('product-list-error')).toBeVisible()
  })

  it('should refresh list if pull to refresh', async () => {
    jest.spyOn(hooks, 'useGetProducts').mockReturnValue({
      ...mockUseGetProductsValue,
      isLoading: false,
    })

    renderWithProviders(<Products />)

    const productList = screen.getByTestId('product-list')

    const { refreshControl } = productList.props
    await act(async () => {
      refreshControl.props.onRefresh()
    })
    expect(screen.getByTestId('product-list')).toBeVisible()
  })
})
