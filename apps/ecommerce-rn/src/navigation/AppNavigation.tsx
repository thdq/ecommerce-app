import { memo } from 'react'
import { TouchableHighlight } from 'react-native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { Products, Cart, Checkout } from '@app/screens'
import { AntDesign } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'

type RootStackParamList = {
  Products: undefined
  Cart: undefined
  Checkout: undefined
}

export type StackNavigationProps = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigation = () => {
  const { t } = useTranslation()

  const productListTitle = t('screens.products.title')
  const cartTitle = t('screens.cart.title')

  return (
    <Stack.Navigator initialRouteName='Products'>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={() => ({
            title: cartTitle,
          })}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name='Products'
          component={Products}
          options={({ navigation }) => ({
            title: productListTitle,
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
