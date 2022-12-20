import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Button,
  Image,
} from "react-native";
import React from "react";
import { Hoverable } from "react-native-web-hover";

export default function UserProfile() {
  const image = {
    uri: "https://media.tycsports.com/files/2022/12/18/517475/rodrigo-de-paul_416x234.webp",
  };

  return (
    <View style={styles.containerUser}>
      <Image
        source={image}
        style={styles.imageOfUser}
      ></Image>
      <View style={styles.contenedorBotones}>
        <Text style={styles.textName}>Rodrigo De Paul</Text>
        <Pressable
          style={({ hovered, focused, pressed }) => [
            styles.buttonRoot,
            hovered && styles.buttonHovered,
            focused && styles.buttonFocused,
            pressed && styles.buttonPressed,
          ]}
        >
          {({ hovered, focused, pressed }) => (
            <View style={styles.buttonInner}>
              <Text style={styles.buttonLabel}>{}</Text>
            </View>
          )}
        </Pressable>

        <Hoverable>
          {({ hovered }) => (
            <Button
              title="Edit profile"
              onPress={() => {}}
              color={hovered ? "black" : "grey"}
            />
          )}
        </Hoverable>
        <Pressable
          style={({ hovered, focused, pressed }) => [
            styles.buttonRoot,
            hovered && styles.buttonHovered,
            focused && styles.buttonFocused,
            pressed && styles.buttonPressed,
          ]}
        >
          {({ hovered, focused, pressed }) => (
            <View style={styles.buttonInner}>
              <Text style={styles.buttonLabel}>{}</Text>
            </View>
          )}
        </Pressable>

        <Hoverable>
          {({ hovered }) => (
            <Button
              title="Logout"
              onPress={() => {}}
              color={hovered ? "black" : "grey"}
            />
          )}
        </Hoverable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerButton: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 240,
    marginRight: 16,
  },

  imageOfUser: {
    height: 170,
    width: 170,
    justifyContent: "center",
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    borderWidth: 3,
    borderColor: '#CEF10A',
    borderRadius: 180,
  },
  containerUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: '#24262B',
    height: 330,

  },
  textName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: 'white',
  },
  contenedorBotones: {
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    marginRight: 40,
  },
});
