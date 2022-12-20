import { View, Text, ScrollView, ImageBackground, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { Hoverable, Pressable, } from 'react-native-web-hover'
import UserProfile from '../components/UserProfile';

export default function Profile() {
    const image = { uri: "https://cdn.wallpapersafari.com/13/5/tcfibJ.jpg" };
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