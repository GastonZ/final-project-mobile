import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screen/Home'
import Details from '../screen/Details';
const StackNav = createNativeStackNavigator()
export default function Stack() {
  return (
    <StackNav.Navigator>
        <StackNav.Screen name= "Home" component={Home}/>
        <Stack.Screen name= "Details" component={Details}/>
    </StackNav.Navigator>
  )
}