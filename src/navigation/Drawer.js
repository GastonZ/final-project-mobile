import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screen/Home';
 import Details from '../screen/Details';
import SignUp from '../screen/SignUp';
import SignIn from '../screen/SignIn'
import Shop from '../screen/Shop'
import DetailsArticle from "../screen/DetailsArticle";
import Profile from "../screen/Profile";
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import usersActions from "../../redux/actions/userAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Cart from "../screen/Cart";
const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  let { enterAgain } = usersActions
  let dispatch = useDispatch()
  let { role, logged } = useSelector(store => store.usuario)
   async function enterAgainToken(){
    let token = JSON.parse(AsyncStorage.getItem("token"))
    if (token){
     await dispatch(enterAgain(token.token.user))
    }
  }
    useEffect(  ()=>{
   enterAgainToken()
    },[]) 
  return (
    <DrawerNav.Navigator initialRoutName= "Home">
        <DrawerNav.Screen name="Home" component={Home}/>
        <DrawerNav.Screen name="Shop" component={Shop}/>
        <DrawerNav.Screen name="Details" component={Details}/>
        <DrawerNav.Screen name= "DetailsArticle" component={DetailsArticle}/>
      {!logged? (<DrawerNav.Screen name="SignIn" component={SignIn}/>):null}
      {!logged? (<DrawerNav.Screen name="SignUp" component={SignUp} />):null}
      {logged?  (<DrawerNav.Screen name="Profile" component={Profile} />):null}
        <DrawerNav.Screen name="Cart" component={Cart}/>
    </DrawerNav.Navigator>
  )
}