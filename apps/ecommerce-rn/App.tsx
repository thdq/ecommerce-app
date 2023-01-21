import { StatusBar } from 'expo-status-bar'
import { Provider as JotaiProvider } from 'jotai'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './src/navigation/AppNavigation'

export default function App() {
  return (
    <SafeAreaProvider>
      <JotaiProvider>
        <NavigationContainer>
          <AppNavigation />
          <StatusBar style='auto' />
        </NavigationContainer>
      </JotaiProvider>
    </SafeAreaProvider>
  )
}
