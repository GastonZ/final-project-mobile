import { View, Text, StyleSheet, Pressable, Button } from 'react-native'
import React from 'react'
import { Hoverable, ScrollView } from 'react-native-web-hover';
import {useNavigation} from '@react-navigation/native'
 function botonclickeable (){
    const navigation = useNavigation()
 }
export default function Cart(props) {
    return (
        <ScrollView>
            <View>
                <Text style={styles.primerTexto}>Cart</Text>
            </View>
            <View style={styles.containerButtonandText}>
                <Text style={styles.textTwo}>Your cart is empty.</Text>
                <Pressable
                    onPress={() => props.navigation.navigate("Shop")}
                    style={({ hovered, focused, pressed, }) => [
                        styles.buttonRoot,
                        hovered && styles.buttonHovered,
                        focused && styles.buttonFocused,
                        pressed && styles.buttonPressed
                    ]}
                >
                    {({ hovered, focused, pressed }) => (
                        <View style={styles.buttonInner}>
                            <Text style={styles.buttonLabel}>
                                { }
                            </Text>
                        </View>
                    )}
                </Pressable>

                <Hoverable>
                    {({ hovered }) => (
                        <Button
                            title="Continue shopping"
                            color={hovered ? "black" : "#cef10a"}
                        />
                    )}
                </Hoverable>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    primerTexto: {
        fontSize: 36,
        marginTop: 50,
        marginLeft: 60,
    },
    containerButtonandText:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 40
    },
    textTwo:{
        marginBottom: 10,
        fontSize: 20,
    },
});