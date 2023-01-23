import { Provider as JotaiProvider } from 'jotai'
import { render } from '@testing-library/react-native'

export const renderWithProviders = (children: JSX.Element[] | JSX.Element) =>
  render(<JotaiProvider>{children}</JotaiProvider>)
