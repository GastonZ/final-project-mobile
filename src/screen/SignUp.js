import { View, Text, StyleSheet, ImageBackground, TextInput, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';


export default function OrderCar() {
    const image = { uri: "https://cdn.discordapp.com/attachments/1050972585002795096/1052632192100073512/aesthetic.png" };
    return (
        <ScrollView>
            <ImageBackground source={image} resizeMode="cover" style={styles.imagefondo}>
                <View style={styles.containerImg}>
                    <View>
                        <View style={styles.textTitleContainer}>
                            <Text style={styles.segundoTexto}><Text style={styles.lineOrange}>| </Text> Create your account</Text>
                            <TextInput style={styles.textTitleTwo} type="text" placeholder="Name" />

                            <TextInput style={styles.textTitleTwo} type="text" placeholder="Last name" />


                            <TextInput style={styles.textTitleTwo} type="text" placeholder="Email" />


                            <TextInput style={styles.textTitleTwo} placeholder="Password" />

                            <Button title='Send' color={'#24262B'}></Button>
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