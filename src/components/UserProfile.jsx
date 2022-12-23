import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Button,
  Image,
  Alert,
} from "react-native";
import React,{ useEffect }  from "react";
import { Hoverable } from "react-native-web-hover";
import usersActions from "../../redux/actions/userAction";
import { useDispatch, useSelector } from 'react-redux'
export default function UserProfile(props) {
  const image = {
    uri: "https://firebasestorage.googleapis.com/v0/b/motorx-firebase.appspot.com/o/859b703b-1459-4261-a78e-a2e6ebc27a34?alt=media&token=a59f5c0f-78ff-4727-9fc8-0c5497d72e31",
  };
  let{ token, id } = useSelector(store => store.usuario)
  let {logOut} = usersActions
   let dispatch = useDispatch()
/*   useEffect(()=>{
    dispatch(getOneUser({id: id, token: token}))
  },[])  */
   console.log(id); 

  async function desconect () {
    await dispatch(logOut(token))
    Alert.alert('Bye, see you later')
    props.navigation.navigate("Home");
}
  return (
    <View style={styles.containerUser}>
      <Image
        source={image}
        style={styles.imageOfUser}
      ></Image>
      <View style={styles.contenedorBotones}>
        <Text style={styles.textName}>Lionel Messi</Text>
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
              onPress={desconect}
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
    /* marginTop: 240, */
    marginRight: 16,
  },

  imageOfUser: {
    height: 170,
    width: 170,
    justifyContent: "center",
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    /* marginTop: 40, */
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
    /* marginTop: 40, */
    display: "flex",
    flexDirection: "column",
    marginRight: 40,
  },
});
