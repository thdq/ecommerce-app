import { StatusBar } from 'expo-status-bar'
import { Provider as JotaiProvider } from 'jotai'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './navigation/AppNavigation'
import { SWRConfig } from 'swr'
import { swrConfig } from '@app/service'

export default function App() {
  return (
    <SafeAreaProvider>
      <SWRConfig value={swrConfig}>
        <JotaiProvider>
          <NavigationContainer>
            <AppNavigation />
            <StatusBar style='auto' />
          </NavigationContainer>
        </JotaiProvider>
      </SWRConfig>
    </SafeAreaProvider>
  )
}
