import { EmptyCart } from '@app/components'
import { renderWithProviders } from '@app/__tests__/wrapper'
import { screen, fireEvent } from '@testing-library/react-native'

const onShowProductsMock = jest.fn()

describe('<EmptyCart /> component', () => {
  it('should renders', () => {
    renderWithProviders(<EmptyCart onShowProducts={onShowProductsMock} />)

    expect(screen.getByText('Seu carrinho está vazio')).toBeVisible()
    expect(
      screen.getByText('Comece adicionando um produto ao carrinho para realizar uma compra!'),
    ).toBeVisible()
  })

  it('should call onShowProducts on button press', () => {
    renderWithProviders(<EmptyCart onShowProducts={onShowProductsMock} />)

    fireEvent.press(screen.getByTestId('show-products-button'))
    expect(onShowProductsMock).toBeCalled()
  })
})
