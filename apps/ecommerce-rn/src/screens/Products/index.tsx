import { Text, Button, View, StyleSheet } from 'react-native'

const Products = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate('Cart')
  }

  return (
    <View style={styles.container}>
      <Text> Products screen </Text>
      <Button title='Go to Cart' onPress={handlePress} />
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

export { Products }
