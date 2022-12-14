
import React from "react";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,

} from "react-native";
import CarOne from "../components/CarOne"; 
import CarTwo from "../components/CarTwo";
import CarThree from "../components/CarThree";
import CarFour from "../components/CarFour";
const windowHeight = Dimensions.get('window').height;

export default function Home() {
  const image = {
    uri: "https://i.pinimg.com/originals/7e/21/48/7e2148953987ce74723756b779932271.jpg",
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.decored}>[ </Text>
            Model S
            <Text style={styles.decored}> ]</Text>
          </Text>
          <Text style={styles.text5}>Mobile version</Text>
          <View style={styles.ContainerButtonDetails}>
        <Pressable
          style={styles.ButtonDetails}
        ><Text style={styles.TextButtonDetails} >More Information</Text></Pressable>
        </View>
        </View>
      </ImageBackground>
      <CarOne></CarOne>
      <CarTwo></CarTwo>
      <CarThree></CarThree>
      <CarFour></CarFour>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.550)",
    width: 420,
    height: windowHeight,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 710,
  },
  text: {
    color: "#eee",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
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

  secondarytexthome: {
    color: "#1a1a1a",
    fontSize: 40,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  logo: {
    height: 130,
    width: 130,
    marginRight: 12,
  },

  contenedorGaleria: {
    marginBottom: 35,
    marginTop: 35,
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
    marginTop: 40,
  },
  TextButtonDetails:{
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
  },
});
