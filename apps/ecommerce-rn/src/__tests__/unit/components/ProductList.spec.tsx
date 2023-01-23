import { screen } from '@testing-library/react-native'
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

    const errorComponent = screen.getByTestId('error')
    expect(errorComponent).toBeVisible()
  })
})
