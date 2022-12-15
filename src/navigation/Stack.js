import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screen/Home'
import Details from '../screen/Details';
import SignUp from '../screen/SignUp';
import SignIn from '../screen/SignIn'


const StackNav = createNativeStackNavigator()
export default function Stack() {
  return (
    <StackNav.Navigator>
        <StackNav.Screen name= "Home" component={Home}/>
        <StackNav.Screen name= "Details" component={Details}/>
        <StackNav.Screen name="SignUp" component={SignUp}/>
        <StackNav.Screen name="SignIn" component={SignIn}/>
    </StackNav.Navigator>
  )
}