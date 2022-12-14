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
   const car =props.route.params
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{uri: car.imageDetails}}
        resizeMode="cover"
        style={styles.imagefondo}
      >
        <View style={styles.carrusel}>
        <Text style={styles.decored}> [</Text>
          <Text style={styles.titulo1}> {car.title} </Text>
          <Text style={styles.decored}> ]</Text>
        </View> 
        <View style={styles.containerDescription}>
          <View style={styles.carrusel2}>
            <View style={styles.values}>
              <CountUp initial={0} value={car.peakPower} countBy={1} style={styles.description} />
              <Text style={styles.description}>mi</Text>
            </View>
            <Text style={styles.description2}> Range(EPA est.)</Text>
          </View>
          <View style={styles.carrusel2}>
            <View style={styles.values}>
              <CountUp initial={0} value={car.milesPerSec} countBy={1} style={styles.description} />
              <Text style={styles.description}>mph</Text>
            </View>
            <Text style={styles.description2}> Top Speed</Text>
          </View>
          <View style={styles.carrusel2}>
            <View style={styles.values}>
              <Text style={styles.description}>{car.acceleration.slice(0,3)}</Text>
              <Text style={styles.description}>sec</Text>
            </View>
            <Text style={styles.description2}>0-60 mph</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.containerDescription2}>
        <View style={styles.containerFirstDescription}>
          <View>
          <Text style={styles.subtitle}> Powerful Efficiency </Text>
          <Text style={styles.text1}>
            Tesla designed Model 3 from the ground-up as an electric vehicle
            using system-level integration throughout. Each component, including
            batteries, motors and even exterior aerodynamics are optimized to
            benefit from one another and create one of the most efficient, yet
            unbelievably powerful vehicles ever built. *With first foot of
            rollout subtracted.
          </Text>
          </View>
          <Image
              style={styles.cardImg}
              source={{uri:"https://sm.pcmag.com/pcmag_me/news/t/toyota-rol/toyota-rolls-out-next-gen-plug-in-prius_jfcv.jpg"}}
            />
        </View>
        <View style={styles.containerFirstDescription}>
          <Image
              style={styles.cardImg2}
              source={{uri:"https://www.motorbiscuit.com/wp-content/uploads/2021/09/GettyImages-1339287127-1024x683.jpg"}}
            />
                      <View>
          <Text style={styles.subtitle}> Very Cold Weather</Text>
          <Text style={styles.text1}>
            For the best long range driving experience in the coldest driving
            conditions, we recommend a Long Range or Performance Model 3.
          </Text>
          </View>
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
  decored: {
    color: "#cef10a",
    fontSize: 40,
    fontWeight: "800",
    marginTop: 30,
  },
  cardImg2:{
    marginRight:10,
    marginTop:10,
    width:200,
    height:170,
    borderRadius:10,
  },
  cardImg:{
    marginLeft:20,
    marginTop:30,
    width:200,
    height:250,
    borderRadius:10,
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
    color:"white",
    width:windowWidth/2.8,
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
    flexDirection:"row",
    alignItems: "flex-start",
    justifyContent: "center", 
    flexGrow: 1,
  },
  imagefondo: {
    width: windowWidth,
     height: windowHeight/2,
     display:"flex",
     justifyContent:"space-between",
  },
  titulo1: {
    marginTop: 30,
    fontSize: 40,
    fontWeight: "800",
    color:"white",
  },
  containerDescription: {
    height: windowHeight / 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  description: {
    fontSize: 20,
    fontWeight: "800",
    color:"white",
  },
  description2: {
    fontWeight: "400",
  },
  containerFirstDescription:{
    display:"flex",
    flexDirection:'row',
    flexWrap:"wrap",
    marginTop:20,
    width:windowWidth-10,
    height:windowHeight/2.1,
  }
});
