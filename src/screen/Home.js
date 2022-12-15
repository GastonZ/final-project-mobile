import React from 'react'
import { ScrollView, StyleSheet, Text, View , Dimensions,Pressable,Image} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get("window").width;
export default function Home() {
  return (
    <ScrollView style={styles.container}>
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
