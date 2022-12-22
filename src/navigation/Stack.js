import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screen/Home'
import Details from '../screen/Details';
import SignUp from '../screen/SignUp';
import SignIn from '../screen/SignIn'
import Shop from '../screen/Shop'
import DetailsArticle from '../screen/DetailsArticle';
import Profile from '../screen/Profile';
import Cart from '../screen/Cart';

const StackNav = createNativeStackNavigator()
export default function Stack() {
  return (
    <StackNav.Navigator>
        <StackNav.Screen name= "Home" component={Home}/>
        <StackNav.Screen name= "Details" component={Details}/>
        <StackNav.Screen name= "DetailsArticle" component={DetailsArticle}/>
        <StackNav.Screen name="SignUp" component={SignUp}/>
        <StackNav.Screen name="SignIn" component={SignIn}/>
        <StackNav.Screen name="Shop" component={Shop}/>
        <StackNav.Screen name="Profile" component={Profile}/>
        <StackNav.Screen name="Cart" component={Cart}/>
    </StackNav.Navigator>
  )
}