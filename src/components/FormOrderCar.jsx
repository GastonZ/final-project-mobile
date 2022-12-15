import { View, Text,Dimensions,StyleSheet,TextInput,Pressable } from 'react-native'
import React from 'react'
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function FormOrderCar() {
  return (
    <View style={styles.containerForm}>
      <Text style={styles.titleForm}>Contact Us</Text>
      <Text  style={styles.titleTextImput} >
      <Text  style={styles.lineTitleText}>| </Text> Enter your Name
        </Text>
      <TextInput
/*           onChangeText={(newText) => setUser({ ...user, email: newText })}
          defaultValue={user.email} */
          placeholder="Name"
          style={styles.textInput} 
        />
        <Text  style={styles.titleTextImput} >
          <Text  style={styles.lineTitleText}>| </Text> Enter your Email
        </Text>
      <TextInput
/*           onChangeText={(newText) => setUser({ ...user, email: newText })}
          defaultValue={user.email} */
          placeholder="E-Mail"
          style={styles.textInput} 
        />
        <Text  style={styles.titleTextImput} >
          <Text  style={styles.lineTitleText}>| </Text> Enter your Phone
        </Text>
      <TextInput
/*           onChangeText={(newText) => setUser({ ...user, email: newText })}
          defaultValue={user.email} */
          placeholder="Phone"
          style={styles.textInput} 
        />
         <Pressable style={styles.ButtonOrder} /* onPress={entry} */>
          <Text style={styles.textButton}>Send</Text>
        </Pressable>
    </View>
    
  )
}
const styles = StyleSheet.create({
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
    lineTitleText:{
      color:"white",
        fontSize: 24,
    },
    titleTextImput:{
      color:"white",
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    textInput: {
        borderRadius: 8,
        borderWidth: 1,
        width: 300,
        borderColor: "black",
        padding: 5,
        fontSize: 15,
        marginBottom: 10,
        backgroundColor: "white",
      },
    containerForm:{
    height:windowHeight/1.6,
    display:"flex",
    alignItems:"center",
    },
    titleForm:{
        fontWeight:"700",
        fontSize: 25,
        color:"white"
    }
  });
  