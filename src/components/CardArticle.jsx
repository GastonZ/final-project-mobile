import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

export default function CardArticle() {
  return (
    <>
      <View style={styles.cardBestSeller09}>
        <Image
          source={{
            uri: "https://media.discordapp.net/attachments/1019730194984091739/1051979270991392859/image.png?width=1440&height=668",
          }}
          resizeMode="cover"
          style={styles.imagefondo}
        ></Image>
        <Text>Men's Apparel</Text>
        <Pressable style={styles.buttonshop09}>
          <Text style={styles.textButton}>Shop Now</Text>
        </Pressable>
      </View>
      <View style={styles.cardBestSeller09}>
        <Image
          source={{
            uri: "https://media.discordapp.net/attachments/1019730194984091739/1051979772714024970/image.png?width=1425&height=671",
          }}
          resizeMode="cover"
          style={styles.imagefondo}
        ></Image>
        <Text>Women's Apparel</Text>
        <Pressable style={styles.buttonshop09}>
          <Text style={styles.textButton}>Shop Now</Text>
        </Pressable>
      </View>
      <View style={styles.cardBestSeller09}>
        <Image
          source={{
            uri: "https://media.discordapp.net/attachments/1019730194984091739/1051980429479137350/image.png?width=1440&height=625",
          }}
          resizeMode="cover"
          style={styles.imagefondo}
        ></Image>
        <Text>Kid's Apparel</Text>
        <Pressable style={styles.buttonshop09}>
          <Text style={styles.textButton}>Shop Now</Text>
        </Pressable>
      </View>
      <View style={styles.cardBestSeller09}>
        <Image
          source={{
            uri: "https://media.discordapp.net/attachments/1019730194984091739/1051986508472651878/Sin_titulo-1.png?width=583&height=671",
          }}
          resizeMode="cover"
          style={styles.imagefondo}
        ></Image>
        <Text>Accesories</Text>
        <Pressable style={styles.buttonshop09}>
          <Text style={styles.textButton}>Shop Now</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imagefondo: {
    objectFit: "cover",
    height: "75%",
    width: "80%",
    borderRadius: 5,
  },
  textButton: {
    textAlign: "center",
  },
  cardBestSeller09: {
    backgroundColor: "rgb(247, 247, 247)",
    width: 320,
    height: 500,
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonshop09: {
    backgroundColor: "#eeeeeb",
    /*   font-family: "Montserrat", sans-serif, */
    color: "rgb(39, 38, 38)",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    width: 300,
    padding: 12,
    borderRadius: 5,
    border: "none",
    marginRop: 32,
  },
});
