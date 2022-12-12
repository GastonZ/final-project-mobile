import React from 'react'
import { ScrollView, StyleSheet, Text, View , Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default function Home() {
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.carrusel}>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      <Text>carrusel</Text>
      </View>
      <View style={styles.carrusel2}>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      <Text>carrusel2</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carrusel: {
    flex: 1,
    width:500,
    height:windowHeight,
    backgroundColor: '#181D31',
  },

  carrusel2: {
    flex: 1,
    width:500,
    height:windowHeight,
    backgroundColor: '#ea5318',
  },
});
