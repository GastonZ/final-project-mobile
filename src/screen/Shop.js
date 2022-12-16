import {
  ImageBackground,
  Text,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Dimensions
} from "react-native";
import React from "react";
import CardArticle from "../components/CardArticle";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default function Shop(props) {
  const image = {
    uri: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Wall_Connector_banner_web.jpg",
  };

  return (
    <>
      <ScrollView style={styles.containerCityHotels} contentContainerStyle={{ alignItems: 'center' }}>
      <SwiperFlatList autoplay autoplayDelay={3} autoplayLoop index={1} showPagination>
      <View style={styles.containerCarrusel} >
      <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.imagefondo}
        >
          <View style={styles.containerImg}>
            <Text style={styles.textTitleTwo}>Wall Connector</Text>
            <Text style={styles.subText}>
              The most convenient way to charge
            </Text>
            <Pressable
              style={styles.ButtonOrder}
              onPress={() => props.navigation.navigate("Order")}
            >
              <Text style={styles.textButton}>Shop Now</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.containerCarrusel}  >
      <ImageBackground
          source={{uri:"https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Chill_banner_web.jpg"}}
          resizeMode="cover"
          style={styles.imagefondo}
        >
          <View style={styles.containerImg}>
            <Text style={styles.textTitleTwo}>Chill Collection</Text>
            <Text style={styles.subText}>
            Premium Confort for Any Season
            </Text>
            <Pressable
              style={styles.ButtonOrder}
              onPress={() => props.navigation.navigate("Order")}
            >
              <Text style={styles.textButton}>Shop Now</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.containerCarrusel} >
      <ImageBackground
          source={{uri:"https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MY_Floormats_banner_web.jpg"}}
          resizeMode="cover"
          style={styles.imagefondo}
        >
          <View style={styles.containerImg}>
            <Text style={styles.textTitleTwo}>Weather Interior</Text>
            <Text style={styles.subText}>
            Maximum protection and durability
            </Text>
            <Pressable
              style={styles.ButtonOrder}
              onPress={() => props.navigation.navigate("Order")}
            >
              <Text style={styles.textButton}>Shop Now</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </SwiperFlatList>
        <CardArticle navigation={props.navigation}></CardArticle>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    containerCarrusel:{
        width:windowWidth,
       /*  height:windowHeight/2, */
    },
  textButton: {
    backgroundColor: "#cef10a",
    /*   fontFamily: "Montserrat", sans-serif, */
    color: "rgb(39, 38, 38)",
    fontSize: 14,
    fontWeight: "bold",
    width: 300,
    padding: 12,
    borderRadius: 5,
    border: "none",
    marginTop: 32,
    cursor: "pointer",
    textAlign: "center",
  },
  containerCityHotels: {
    display: "flex",
    width: "100%",
  },
  containerImg: {
    backgroundColor: "rgba(0,0,0,.606)",
    height:windowHeight/2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imagefondo: {
    width: "100%",
    height:windowHeight/2,
    justifyContent: "center",
    flex: 1,
    marginBottom: 40,
  },
  subText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
  textTitleTwo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 16,
  },
});
