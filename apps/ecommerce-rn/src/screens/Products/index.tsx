import { View, StyleSheet } from 'react-native'
import { ProductList } from '../../components/ProductList'

const Products = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ProductList />
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 70,
    textAlign: 'center',
    marginBottom: 30,
  },
})

export { Products }
