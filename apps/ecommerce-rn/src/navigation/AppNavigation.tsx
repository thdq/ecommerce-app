import { memo } from 'react'
import { TouchableHighlight } from 'react-native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { Products, Cart, Checkout } from '@app/screens'
import { AntDesign } from '@expo/vector-icons'

type RootStackParamList = {
  Products: undefined
  Cart: undefined
  Checkout: undefined
}

export type StackNavigationProps = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Products'>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={() => ({
            title: 'Carrinho de compras',
          })}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name='Products'
          component={Products}
          options={({ navigation }) => ({
            title: 'Produtos',
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
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default memo(AppNavigation)
