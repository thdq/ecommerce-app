import { memo } from 'react'
import { TouchableHighlight } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Products, Cart, Checkout } from '../screens'
import { AntDesign } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Products' screenOptions={{}}>
      <Stack.Screen
        name='Products'
        component={Products}
        options={({ navigation }) => ({
          headerBackTitle: 'Voltar',
          headerRight: () => (
            <TouchableHighlight>
              <AntDesign
                name='shoppingcart'
                size={30}
                style={{ color: '#15803d' }}
                onPress={() => navigation.navigate('Cart')}
              />
            </TouchableHighlight>
          ),
        })}
      />
      <Stack.Screen
        name='Checkout'
        component={Checkout}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={({ navigation }) => ({
            title: 'Carrinho de compras',
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default memo(AppNavigation)
