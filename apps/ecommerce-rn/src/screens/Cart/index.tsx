import { Text, Button, View, StyleSheet } from 'react-native'
import { ProductCart } from '../../components/ProductCart'
import { useCart } from '../../hooks/use-cart'

const Cart = ({ navigation }: any) => {
  const { getCartSummary } = useCart()
  const { list, totalItens, totalPrice } = getCartSummary()

  const handleBack = () => {
    navigation.navigate('Products')
  }

  return (
    <View style={styles.container}>
      <Text> Total de itens: {totalItens} </Text>
      <Text> Valor total: {totalPrice} </Text>
      {list.map((product) => (
        <ProductCart product={product} key={product.id} />
      ))}
      <Button title='Go back' onPress={handleBack} />
    </View>
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

export { Cart }
