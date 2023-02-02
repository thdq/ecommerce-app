import { StatusBar } from 'expo-status-bar'
import { connectToDevTools } from 'react-devtools-core'
import { Provider as JotaiProvider } from 'jotai'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './navigation/AppNavigation'
import { I18nextProvider } from 'react-i18next'
import { SWRConfig } from 'swr'
import { swrConfig, i18n } from '@app/services'

if (__DEV__) {
  connectToDevTools({
    host: 'localhost',
    port: 8097,
  })
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SWRConfig value={swrConfig}>
        <I18nextProvider i18n={i18n}>
          <JotaiProvider>
            <NavigationContainer>
              <AppNavigation />
              <StatusBar style='auto' />
            </NavigationContainer>
          </JotaiProvider>
        </I18nextProvider>
      </SWRConfig>
    </SafeAreaProvider>
  )
}
