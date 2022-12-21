import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import { ScrollView } from "react-native-gesture-handler";
import usersActions from "../../redux/actions/userAction"

export default function OrderCar(props) {
  const image = {
    uri: "https://cdn.discordapp.com/attachments/1050972585002795096/1052632192100073512/aesthetic.png",
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let dispatch = useDispatch();
  let { logIn } = usersActions;

  async function signIn() {
    try {
      let res = await dispatch(logIn(user));

      console.log(res.payload.response.userToken.name);

      if (res.payload.success) {
        Alert.alert(`Welcome again  ${res.payload.response.userToken.name}`);
        props.navigation.navigate("Home");;
      } 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ScrollView>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imagefondo}
      >
        <View style={styles.containerImg}>
          <View>
            <View style={styles.textTitleContainer}>
              <Text style={styles.segundoTexto}>
                <Text style={styles.lineOrange}>| </Text> Your dream car awaits
                you
              </Text>

              <TextInput
                style={styles.textTitleTwo}
                type="text"
                onChangeText={(newText) => setUser({ ...user, email: newText })}
                defaultValue={user.email}
                placeholder="Email"
              />

              <TextInput style={styles.textTitleTwo} 
              onChangeText={(newText) => setUser({ ...user, password: newText })}
              defaultValue={user.password} placeholder="Password" />

              <Button onPress={signIn} title="Sign in" color={"#24262B"}></Button>
            </View>
            <View>
              <Text style={styles.segundoTexto}>
                <Text style={styles.lineOrange}>|</Text> Still don't have an
                account?
              </Text>
              <Button
                title="Sign up quickly!"
                color="#24262B"
              ></Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  imagefondo: {
    height: 630,
    justifyContent: "center",
    flex: 1,
  },
  containerImg: {
    height: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lineOrange: {
    color: "#24262B",
    fontSize: 24,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
  },
  textTitleTwo: {
    borderRadius: 4,
    borderWidth: 0,
    borderColor: "red",
    padding: 5,
    fontSize: 15,
    marginVertical: 5,
    backgroundColor: "white",
  },
  segundoTexto: {
    color: "black",
    padding: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
});
