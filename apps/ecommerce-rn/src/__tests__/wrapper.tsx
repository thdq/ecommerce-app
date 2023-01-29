import { Provider as JotaiProvider } from 'jotai'
import { render } from '@testing-library/react-native'
import { SWRConfig } from 'swr'
import { swrConfig } from '@app/services'
import { I18nextProvider } from 'react-i18next'
import { i18n } from '@app/services'

i18n.changeLanguage('en_US')

const { t: translate } = i18n

const renderWithProviders = (children: JSX.Element[] | JSX.Element) =>
  render(
    <SWRConfig value={{ ...swrConfig, dedupingInterval: 0 }}>
      <I18nextProvider i18n={i18n}>
        <JotaiProvider>{children}</JotaiProvider>
      </I18nextProvider>
    </SWRConfig>,
  )

export { renderWithProviders, translate }
