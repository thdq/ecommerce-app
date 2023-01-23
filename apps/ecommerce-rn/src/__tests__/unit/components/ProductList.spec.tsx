import { screen } from '@testing-library/react-native'
import { ProductList } from '../../../components/ProductList'
import { renderWithProviders } from '../../wrapper'

describe('<ProductList /> component', () => {
  it('should renders loading if list is fetching', async () => {
    renderWithProviders(<ProductList />)

    const loadingText = screen.queryByText('Carregando')
    expect(loadingText).toBeVisible()
  })
})
