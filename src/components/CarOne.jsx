import { View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView, Pressable } from "react-native";
import React from "react";
const windowHeight = Dimensions.get('window').height;

export default function CarOne(props) {
  const {car} = props
  return (
    <ScrollView>
      <ImageBackground source={{uri:car.image}} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.decored}>[ </Text>
            {car.title}
            <Text style={styles.decored}> ]</Text>
          </Text>
          <View style={styles.ContainerButtonDetails}>
        <Pressable
          style={styles.ButtonDetails}
          onPress={() => props.navigation.navigate('Details', car)}
        ><Text style={styles.TextButtonDetails} >More Information</Text></Pressable>
        </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex: 1,
    backgroundColor: "rgba(0,0,0,.550)",
    width: 420,
    justifyContent:"space-between",
    height: windowHeight,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 500,
  },
  text: {
    color: "#eee",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:20,
  },

  barSeparate: {
    backgroundColor: "black",
    height: 18,
  },

  text5: {
    color: "#eee",
    fontSize: 15,
    fontWeight: "light",
    margin: 4,
    textAlign: 'center',
  },

  decored: {
    color: "#cef10a",
  },
  ButtonDetails: {
    width: "50%",
    height: 50,
    backgroundColor: "#cef10a",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  ContainerButtonDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:20,
  },
  TextButtonDetails:{
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
  },
});