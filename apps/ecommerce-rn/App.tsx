import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Provider as JotaiProvider } from 'jotai'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <JotaiProvider>
        <NavigationContainer>
          <View style={styles.container}>
            <Text>Hello World!</Text>
            <StatusBar style='auto' />
          </View>
        </NavigationContainer>
      </JotaiProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
