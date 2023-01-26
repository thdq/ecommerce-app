import { Provider as JotaiProvider } from 'jotai'
import { render } from '@testing-library/react-native'
import { SWRConfig } from 'swr'
import { swrConfig } from '@app/service'

export const renderWithProviders = (children: JSX.Element[] | JSX.Element) =>
  render(
    <SWRConfig value={{ ...swrConfig, dedupingInterval: 0 }}>
      <JotaiProvider>{children}</JotaiProvider>
    </SWRConfig>,
  )
