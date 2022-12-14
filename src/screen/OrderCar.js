import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import React from "react";
import FormOrderCar from "../components/FormOrderCar";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function OrderCar() {
  const image = {
    uri: "https://tesla-cdn.thron.com/delivery/public/image/tesla/139918db-6847-409f-90dc-8031b835d6e2/bvlatuR/std/1200x628/Model-S-Homepage-Social-LHD",
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imagefondo}
      >
        <View style={styles.carrusel}>
          <Text style={styles.titulo1}>Your Model</Text>
        </View>
      </ImageBackground>
      <View style={styles.containerDescription}>
        <View style={styles.carrusel2}>
        <Text style={styles.description2}>Color: </Text>
        <Text>Red</Text>
        <Image
          style={styles.buttonColor}
          source={{
            uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Red.png?version=v0121-b89c9f40d202212090814",
          }}
        />
        </View>
        <View style={styles.carrusel2}>
        <Text style={styles.description2}>Wheel: </Text>
        <Text >19’’ Gemini</Text>
        <Image
          style={styles.buttonColor}
          source={{
            uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-18-aero.png?version=v0121-b89c9f40d202212090814",
          }}
        />
        </View>
        <View style={styles.carrusel2}>
        <Text style={styles.description2}>Color Inside: </Text>
        <Text >Black</Text>
        <Image
          style={styles.buttonColor}
          source={{
            uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_Black.png?version=v0121-b89c9f40d202212090814",
          }}
        />
        </View>
      </View>
      <FormOrderCar/>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  buttonColor: {
    borderRadius: 300,
    width: 50,
    height: 50,
    marginLeft:30,
  },
  description2:{
      fontWeight: "800",
  },
  carrusel2: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
  },
  containerDescription: {
    display: "flex",
    height: windowHeight/3,
    padding:10,

  },
  carrusel: {
    flex: 1,
    width: windowWidth,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexGrow: 1,
  },
  titulo1: {
    marginTop: 40,
    fontSize: 40,
    fontWeight: "800",
  },
  imagefondo: {
    width: windowWidth,
    height: windowHeight / 2,
  },
});
