import { View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView, Pressable } from "react-native";
import React from "react";
const windowHeight = Dimensions.get('window').height;

export default function CarOne(props) {
  const {x} = props
  const image = {
    uri: "https://i.pinimg.com/originals/46/64/b8/4664b84c57b05f6312595048957f1f53.png",
  };
  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.decored}>[ </Text>
            {x.title}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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