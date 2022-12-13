import { View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView } from "react-native";
import React from "react";
const windowHeight = Dimensions.get('window').height;

export default function CarOne() {
  const image = {
    uri:  "https://w0.peakpx.com/wallpaper/310/1013/HD-wallpaper-mustang-car-cars.jpg",
  };
  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.decored}>[ </Text>
            Model K
            <Text style={styles.decored}> ]</Text>
          </Text>
          <Text style={styles.text5}>Mobile version</Text>
        </View>
      </ImageBackground>
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
});
