import { registerRootComponent } from 'expo'
import { connectToDevTools } from 'react-devtools-core'
import App from './src/App'

// eslint-disable-next-line no-undef
if (__DEV__) {
  connectToDevTools({
    host: 'localhost',
    port: 8097,
  })
}

registerRootComponent(App)
