import { fireEvent, screen } from '@testing-library/react-native'
import { ProductListError } from '@app/components'
import { renderWithProviders } from '@app/__tests__/wrapper'

const productListErrorMockProps = {
  onTryAgain: jest.fn(),
}

describe('<ProductListError /> component', () => {
  it('should renders product list error', () => {
    renderWithProviders(<ProductListError {...productListErrorMockProps} />)

    const messageText = screen.getByText('Ocorreu um erro ao recuperar lista de produtos')

    expect(messageText).toBeTruthy()
  })

  it('should call onTryAgain when button is pressed', () => {
    renderWithProviders(<ProductListError {...productListErrorMockProps} />)

    const button = screen.getByText('Tentar novamente')

    fireEvent.press(button)

    expect(productListErrorMockProps.onTryAgain).toHaveBeenCalled()
  })
})
