import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screen/Home';
import Details from '../screen/Details';
import SignUp from '../screen/SignUp';
import SignIn from '../screen/SignIn'

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRoutName= "Home">
        <DrawerNav.Screen name="Home" component={Home}/>
        <DrawerNav.Screen name="Details" component={Details}/>
        <DrawerNav.Screen name="SignUp" component={SignUp}/>
        <DrawerNav.Screen name="SignIn" component={SignIn}/>
    </DrawerNav.Navigator>
  )
}