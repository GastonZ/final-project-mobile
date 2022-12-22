import { View, Text, ScrollView, ImageBackground, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { Hoverable, Pressable, } from 'react-native-web-hover'
import UserProfile from '../components/UserProfile';

export default function Profile() {
    const image = { uri: "https://firebasestorage.googleapis.com/v0/b/motorx-firebase.appspot.com/o/2b114b82-bc5e-4c2f-a9bc-36a3e56cad21?alt=media&token=c7d0c194-6647-4830-b233-93e76dd05a54" };
  return (
    <ScrollView>
    <View>
    <ImageBackground source={image} resizeMode="cover" style={styles.imagefondo}>
        <View style={styles.containerButton}>
        <Pressable
      style={({ hovered, focused, pressed,}) => [
        styles.buttonRoot,
        hovered && styles.buttonHovered,
        focused && styles.buttonFocused,
        pressed && styles.buttonPressed
      ]}
    >
      {({ hovered, focused, pressed }) => (
        <View style={styles.buttonInner}>
          <Text style={styles.buttonLabel}>
            {}
          </Text>
        </View>
      )}
    </Pressable>

      <Hoverable>
        {({ hovered }) => (
          <Button
            title="Edit banner image"
            onPress={() => {}}
            color={hovered ? "black" : "grey"}
          />
        )}
      </Hoverable>
        </View>
      </ImageBackground>
    </View>
    <UserProfile></UserProfile>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
      containerButton:{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginTop: 180,
        marginRight: 16,
      },

      imagefondo: {
        height: 300,
        justifyContent: 'center',
        flex: 1,
      },
      imgUser:{
        height: 500,
        width: 350,
      },
  });