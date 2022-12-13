import { View, Text ,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function OrderCar() {
  return (
    <View style={styles.carrusel}>
    <Text style={styles.titulo1}>Your Model 3</Text>
  </View>
  )
}
const styles = StyleSheet.create({
    carrusel: {
      flex: 1,
      width: windowWidth,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexGrow: 1,
    },
    titulo1: {
      marginTop: 60,
      fontSize: 40,
      fontWeight: "800",
    },
  });
  