import { EmptyCart } from '@app/components'
import { renderWithProviders, translate } from '@app/__tests__/wrapper'
import { screen, fireEvent } from '@testing-library/react-native'

const TRANSALATE_PREFIX = 'components.empty_cart'
const t = (message: string) => translate(`${TRANSALATE_PREFIX}.${message}`)

const onShowProductsMock = jest.fn()

describe('<EmptyCart /> component', () => {
  it('should renders', () => {
    renderWithProviders(<EmptyCart onShowProducts={onShowProductsMock} />)

    expect(screen.getByText(t('title'))).toBeVisible()
    expect(screen.getByText(t('description'))).toBeVisible()
  })

  it('should call onShowProducts on button press', () => {
    renderWithProviders(<EmptyCart onShowProducts={onShowProductsMock} />)

    fireEvent.press(screen.getByTestId('show-products-button'))
    expect(onShowProductsMock).toBeCalled()
  })
})
