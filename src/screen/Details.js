import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import CountUp from "react-native-countup";
import { useState} from "react";
import React from "react";
import FormOrderCar from "../components/FormOrderCar";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default function Details(props) {
  const image = {
    uri: "https://tesla-cdn.thron.com/delivery/public/image/tesla/139918db-6847-409f-90dc-8031b835d6e2/bvlatuR/std/1200x628/Model-S-Homepage-Social-LHD",
  };
  const image2 = { uri: "https://tesla-cdn.thron.com/delivery/public/image/tesla/139918db-6847-409f-90dc-8031b835d6e2/bvlatuR/std/1200x628/Model-S-Homepage-Social-LHD" };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imagefondo}
      >
        <View style={styles.carrusel}>
          <Text style={styles.titulo1}>Model 3</Text>
        </View>
        <View style={styles.containerDescription}>
          <View style={styles.carrusel2}>
            <View style={styles.values}>
              <CountUp initial={0} value={272} countBy={1} style={styles.description} />
              <Text style={styles.description}>mi</Text>
            </View>
            <Text style={styles.description2}> Range(EPA est.)</Text>
          </View>
          <View style={styles.carrusel2}>
            <View style={styles.values}>
              <CountUp initial={0} value={140} countBy={1} style={styles.description} />
              <Text style={styles.description}>mph</Text>
            </View>
            <Text style={styles.description2}> Top Speed</Text>
          </View>
          <View style={styles.carrusel2}>
            <View style={styles.values}>
              <CountUp initial={0} value={5.8} countBy={1} style={styles.description} />
              <Text style={styles.description}>sec</Text>
            </View>
            <Text style={styles.description2}>0-60 mph</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.containerDescription2}>
        <View style={styles.containerFirstDescription}>
          <Text style={styles.subtitle}> Powerful Efficiency </Text>
          <Text style={styles.text1}>
            Tesla designed Model 3 from the ground-up as an electric vehicle
            using system-level integration throughout. Each component, including
            batteries, motors and even exterior aerodynamics are optimized to
            benefit from one another and create one of the most efficient, yet
            unbelievably powerful vehicles ever built. *With first foot of
            rollout subtracted.
          </Text>
          <Image
              style={styles.cardImg}
              source={image2}
            />
        </View>
        <View style={styles.containerFirstDescription}>
          <Text style={styles.subtitle}> Very Cold Weather</Text>
          <Text style={styles.text1}>
            For the best long range driving experience in the coldest driving
            conditions, we recommend a Long Range or Performance Model 3.
          </Text>
          <Image
              style={styles.cardImg}
              source={image2}
            />
        </View>
      </View>
      <FormOrderCar/>
{/*       <Pressable
        style={styles.ButtonOrder}
        onPress={() => props.navigation.navigate("Order")}
      >
        <Text style={styles.textButton}>Order</Text>
      </Pressable> */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cardImg:{
    marginTop:10,
    width:windowWidth-15,
    height:300,
  },
  container: {
    flex: 1,
    backgroundColor:"black"
  },
  values: {
    display: "flex",
    flexDirection: "row",
  },
  textButton: {
    color: "white",
    fontWeight: "800",
  },
  ButtonOrder: {
    backgroundColor: "#171a20",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 40,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
    textAlign: "center",
  },
  cardButton: {
    width: 50,
    height: 50,
    borderRadius: 300,
  },
  cardImgInside: {
    height: 250,
    width: windowWidth,
  },
  cardImgwheel: {
    height: 250,
    width: windowWidth,
  },
  cardImgColor: {
    height: 160,
    width: windowWidth,
  },
  buttonColor: {
    borderRadius: 300,
    width: 70,
    height: 70,
  },
  colors: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
    height: 250,
  },
  containerColor: {
    height: windowHeight / 2.4,
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  containerWheel: {
    height: windowHeight / 2,
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  containerInside: {
    height: windowHeight / 1.8,
    padding: 10,
    display: "flex",
    alignItems: "center",
  },
  containerDescription2: {
    padding: 10,
 /*     height: windowHeight,  */
/*     display: "flex",
    justifyContent: "space-around", */
  },
  text1: {
    marginLeft: 5,
    color:"white"
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "400",
    color:"white"
  },
  carrusel: {
    flex: 1,
    width: windowWidth,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexGrow: 1,
  },
  imagefondo: {
    width: windowWidth,
    height: windowHeight,
  },
  titulo1: {
    marginTop: 60,
    fontSize: 40,
    fontWeight: "800",
  },
  containerDescription: {
    height: windowHeight / 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  description: {
    fontSize: 20,
    fontWeight: "800",
  },
  description2: {
    fontWeight: "400",
  },
  containerFirstDescription:{
    marginTop:20,
    height:windowHeight/1.5,
  }
});
