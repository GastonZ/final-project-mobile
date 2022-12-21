import { View, Text, StyleSheet, ImageBackground, TextInput, Button,Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
import usersActions from '../../redux/actions/userAction';

export default function OrderCar() {
    const image = { uri: "https://cdn.discordapp.com/attachments/1050972585002795096/1052632192100073512/aesthetic.png" };
    const [datosOfNewUser, setDatosOfNewUser] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });
    let {newUser } = usersActions
    let dispatch = useDispatch()
    async function createNewUser() {
        try {
            let res = await dispatch(newUser(datosOfNewUser))
               if (res.payload.success){
                Alert.alert(`User sign Up ! Next step is to login`)
                  setDatosOfNewUser={
                    name: "",
                    lastName: "",
                    email: "",
                    password: "",
                }
            } else {
                Alert.alert(`Email exist`)
            }  
        } catch(error){
            console.log(error.message)
        }
    }
    return (
        <ScrollView>
            <ImageBackground source={image} resizeMode="cover" style={styles.imagefondo}>
                <View style={styles.containerImg}>
                    <View>
                        <View style={styles.textTitleContainer}>
                            <Text style={styles.segundoTexto}><Text style={styles.lineOrange}>| </Text> Create your account</Text>
                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, name: newText })
                            }
                                defaultValue={datosOfNewUser.name} style={styles.textTitleTwo} type="text" placeholder="Name" />

                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, lastName: newText })
                            }
                                defaultValue={datosOfNewUser.lastName} style={styles.textTitleTwo} type="text" placeholder="Last name" />


                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, email: newText })
                            }
                                defaultValue={datosOfNewUser.email} style={styles.textTitleTwo} type="text" placeholder="Email" />


                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, password: newText })
                            }
                                defaultValue={datosOfNewUser.password}
                                    secureTextEntry={true}
                                    autoCorrect={false} 
                                  style={styles.textTitleTwo} placeholder="Password" />

                            <Button onPress={createNewUser} title='Send' color={'#24262B'}></Button>
                        </View>
                        <View>
                            <Text style={styles.segundoTexto} ><Text style={styles.lineOrange}>|</Text> Already have an account?</Text>
                            <Button title='Sign in with account' color='#24262B'></Button>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    imagefondo: {
        height: 630,
        justifyContent: 'center',
        flex: 1,
    },
    containerImg: {
        height: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineOrange: {
        color: '#24262B',
        fontSize: 24,
    },
    textTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
    },
    textTitleTwo: {
        borderRadius: 8,
        padding: 5,
        fontSize: 15,
        marginVertical: 5,
        backgroundColor: 'white',
    },
    segundoTexto: {
        color: 'black',
        padding: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
});