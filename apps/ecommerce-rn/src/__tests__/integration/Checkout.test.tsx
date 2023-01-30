import { StackNavigationProps } from '@app/navigation/AppNavigation'
import { Checkout } from '@app/screens'
import { fireEvent, screen } from '@testing-library/react-native'
import { renderWithProviders, translate } from '../wrapper'

const TRANSALATE_PREFIX = 'screens.checkout'
const t = (message: string) => translate(`${TRANSALATE_PREFIX}.${message}`)

const navigationMock = {
  navigate: jest.fn(),
} as unknown as StackNavigationProps

describe('Checkout screen', () => {
  it('should renders', () => {
    renderWithProviders(<Checkout navigation={navigationMock} />)

    expect(screen.getByText(t('title'))).toBeVisible()
  })

  it('should navigate to products screen when button is pressed', () => {
    renderWithProviders(<Checkout navigation={navigationMock} />)

    fireEvent.press(screen.getByText(t('see_more')))

    expect(navigationMock.navigate).toBeCalledWith('Products')
  })
})
