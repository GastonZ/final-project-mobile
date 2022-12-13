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

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default function Details(props) {
  const image = {
    uri: "https://tesla-cdn.thron.com/delivery/public/image/tesla/139918db-6847-409f-90dc-8031b835d6e2/bvlatuR/std/1200x628/Model-S-Homepage-Social-LHD",
  };
  let [color, setColor] = useState({
    uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W40B,$IBW1&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&version=v0121-b89c9f40d202212090814",
  });
  let [wheel, setWheel] = useState({
    uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W40B,$IBW1&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&version=v0121-b89c9f40d202212090814",
  });
  let [inside, setInside] = useState({
    uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IBB1,$PPMR,$MT322&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&crop=0,0,0,0&version=v0121-b89c9f40d202212090814",
  });

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
        <View>
          <Text style={styles.subtitle}> Very Cold Weather</Text>
          <Text style={styles.text1}>
            For the best long range driving experience in the coldest driving
            conditions, we recommend a Long Range or Performance Model 3.
          </Text>
        </View>
      </View>
      <View style={styles.containerColor}>
        <Image
          style={styles.cardImgColor}
          source={{
            uri: color.uri,
          }}
        />
        <Text style={styles.subtitle}> Paint </Text>
        <View style={styles.colors}>
          <Pressable
            style={styles.buttonColor}
            onPress={() =>
              setColor({
                uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W40B,$IBW1&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&version=v0121-b89c9f40d202212090814",
              })
            }
          >
            <Image
              style={styles.cardButton}
              source={{
                uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_White.png?version=v0121-b89c9f40d202212090814",
              }}
            />
          </Pressable>
          <Pressable
            style={styles.buttonColor}
            onPress={() =>
              setColor({
                uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W40B,$IBW1&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&version=v0121-b89c9f40d202212090814",
              })
            }
          >
            <Image
              style={styles.cardButton}
              source={{
                uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png?version=v0121-b89c9f40d202212090814",
              }}
            />
          </Pressable>
          <Pressable
            style={styles.buttonColor}
            onPress={() =>
              setColor({
                uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSB,$W40B,$IBW1&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&version=v0121-b89c9f40d202212090814",
              })
            }
          >
            <Image
              style={styles.cardButton}
              source={{
                uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Blue.png?version=v0121-b89c9f40d202212090814",
              }}
            />
          </Pressable>
          <Pressable
            style={styles.buttonColor}
            onPress={() =>
              setColor({
                uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PBSB,$W40B,$IBW1&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&version=v0121-b89c9f40d202212090814",
              })
            }
          >
            <Image
              style={styles.cardButton}
              source={{
                uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png?version=v0121-b89c9f40d202212090814",
              }}
            />
          </Pressable>
          <Pressable
            style={styles.buttonColor}
            onPress={() =>
              setColor({
                uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W40B,$IBW1&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&version=v0121-b89c9f40d202212090814",
              })
            }
          >
            <Image
              style={styles.cardButton}
              source={{
                uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Red.png?version=v0121-b89c9f40d202212090814",
              }}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.containerWheel}>
        <Image
          style={styles.cardImgwheel}
          source={{
            uri: wheel.uri,
          }}
        />
        <Text style={styles.subtitle}> Wheel </Text>
        <View style={styles.colors}>
          <Pressable
            style={styles.buttonColor}
            onPress={() =>
              setWheel({
                uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W40B,$IBW1&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&version=v0121-b89c9f40d202212090814",
              })
            }
          >
            <Image
              style={styles.cardButton}
              source={{
                uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-18-aero.png?version=v0121-b89c9f40d202212090814",
              }}
            />
          </Pressable>
          <Pressable
            style={styles.buttonColor}
            onPress={() =>
              setWheel({
                uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W41B,$IBW1&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&version=v0121-b89c9f40d202212090814",
              })
            }
          >
            <Image
              style={styles.cardButton}
              source={{
                uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-19-sport.png?version=v0121-b89c9f40d202212090814",
              }}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.containerInside}>
        <Image
          style={styles.cardImgInside}
          source={{
            uri: inside.uri,
          }}
        />
        <Text style={styles.subtitle}> Inside </Text>
        <View style={styles.colors}>
          <Pressable
            style={styles.buttonColor}
            onPress={() =>
              setInside({
                uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IBB1,$PPMR,$MT322&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&crop=0,0,0,0&version=v0121-b89c9f40d202212090814",
              })
            }
          >
            <Image
              style={styles.cardButton}
              source={{
                uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_Black.png?version=v0121-b89c9f40d202212090814",
              }}
            />
          </Pressable>
          <Pressable
            style={styles.buttonColor}
            onPress={() =>
              setInside({
                uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IBW1,$PPMR,$MT322&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&crop=0,0,0,0&version=v0121-b89c9f40d202212090814",
              })
            }
          >
            <Image
              style={styles.cardButton}
              source={{
                uri: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_White.png?version=v0121-b89c9f40d202212090814",
              }}
            />
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.ButtonOrder}
        onPress={() => props.navigation.navigate("OrderCar")}
      >
        <Text style={styles.textButton}>Order</Text>
      </Pressable>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: windowHeight / 2.2,
    display: "flex",
    justifyContent: "space-around",
  },
  text1: {
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "400",
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
});
