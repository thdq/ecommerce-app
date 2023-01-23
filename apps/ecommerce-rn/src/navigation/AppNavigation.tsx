import { memo } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Products, Cart } from '../screens'
import { AntDesign } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Products' screenOptions={{}}>
      <Stack.Screen
        name='Products'
        component={Products}
        options={({ navigation }) => ({
          headerShown: true,
          headerBackTitle: 'Voltar',
          headerRight: () => (
            <AntDesign
              name='shoppingcart'
              size={30}
              color='black'
              onPress={() => navigation.navigate('Cart')}
            />
          ),
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
