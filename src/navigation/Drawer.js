import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screen/Home';
 import Details from '../screen/Details';
import SignUp from '../screen/SignUp';
import SignIn from '../screen/SignIn'
import Shop from '../screen/Shop'
import DetailsArticle from "../screen/DetailsArticle";
import Profile from "../screen/Profile";
import Cart from "../screen/Cart";
const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRoutName= "Home">
        <DrawerNav.Screen name="Home" component={Home}/>
        <DrawerNav.Screen name="Shop" component={Shop}/>
        <DrawerNav.Screen name="Details" component={Details}/>
        <DrawerNav.Screen name= "DetailsArticle" component={DetailsArticle}/>
        <DrawerNav.Screen name="SignUp" component={SignUp}/>
        <DrawerNav.Screen name="SignIn" component={SignIn}/>
        <DrawerNav.Screen name="Profile" component={Profile}/>
        <DrawerNav.Screen name="Cart" component={Cart}/>
    </DrawerNav.Navigator>
  )
}