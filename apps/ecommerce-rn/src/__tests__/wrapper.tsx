import { Provider as JotaiProvider } from 'jotai'

type RenderWithProvidersProps = {
  children: JSX.Element[] | JSX.Element
}

export const renderWithProviders = ({ children }: RenderWithProvidersProps) => (
  <JotaiProvider>{children}</JotaiProvider>
)
