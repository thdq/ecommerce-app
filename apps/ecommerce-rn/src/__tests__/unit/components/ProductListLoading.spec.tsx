import { screen } from '@testing-library/react-native'
import { ProductListLoading, SKELETON_FAKE_LIST } from '@app/components'
import { renderWithProviders } from '@app/__tests__/wrapper'

describe('<ProductListLoading /> component', () => {
  it('should renders skeleton', () => {
    renderWithProviders(<ProductListLoading />)

    const skeletonsCard = screen.getAllByTestId('skeleton-card')

    expect(skeletonsCard.length).toEqual(SKELETON_FAKE_LIST.length)
  })
})
