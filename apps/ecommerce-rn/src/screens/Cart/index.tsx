import { Text, Button, View, StyleSheet } from 'react-native'

const Cart = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate('Products')
  }

  return (
    <View style={styles.container}>
      <Text> Cart screen </Text>
      <Button title='Go back' onPress={handlePress} />
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
