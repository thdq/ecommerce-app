import { fireEvent, screen } from '@testing-library/react-native'
import { ProductListError } from '@app/components'
import { renderWithProviders, translate } from '@app/__tests__/wrapper'

const TRANSALATE_PREFIX = 'components.product_list_error'
const t = (message: string) => translate(`${TRANSALATE_PREFIX}.${message}`)

const productListErrorMockProps = {
  onTryAgain: jest.fn(),
}

describe('<ProductListError /> component', () => {
  it('should renders product list error', () => {
    renderWithProviders(<ProductListError {...productListErrorMockProps} />)

    const messageText = screen.getByText(t('title'))

    expect(messageText).toBeTruthy()
  })

  it('should call onTryAgain when button is pressed', () => {
    renderWithProviders(<ProductListError {...productListErrorMockProps} />)

    const button = screen.getByText(t('try_again'))

    fireEvent.press(button)

    expect(productListErrorMockProps.onTryAgain).toHaveBeenCalled()
  })
})
