
import React from "react";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,

} from "react-native";
import CarOne from "../components/CarOne";
import CarTwo from "../components/CarTwo";
import CarThree from "../components/CarThree";
import CarFour from "../components/CarFour"
import React from 'react'
import { ScrollView, StyleSheet, Text, View , Dimensions,Pressable} from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default function Home() {
  const image = {
    uri: "https://i.pinimg.com/originals/7e/21/48/7e2148953987ce74723756b779932271.jpg",
  };

  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.decored}>[ </Text>
            Model S
            <Text style={styles.decored}> ]</Text>
          </Text>
          <Text style={styles.text5}>Mobile version</Text>
        </View>
      </ImageBackground>
      <CarOne></CarOne>
      <CarTwo></CarTwo>
      <CarThree></CarThree>
      <CarFour></CarFour>
    <ScrollView style={styles.container}>
    <Pressable
          style={styles.ButtonDetails}
        ></Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.550)",
    width: 420,
    height: windowHeight,
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
    textAlign: "left",
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
  },

  decored: {
    color: "#ff3648",
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
});
