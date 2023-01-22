import { memo } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Products, Cart } from '../screens'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Products' screenOptions={{}}>
      <Stack.Screen
        name='Products'
        component={Products}
        options={() => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name='Cart'
        component={Cart}
        options={() => ({
          title: 'Cart',
        })}
      />
    </Stack.Navigator>
  )
}

export default memo(AppNavigation)
