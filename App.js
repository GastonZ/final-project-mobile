import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native"
import Drawer from './src/navigation/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer></Drawer>
    </NavigationContainer>
  );
}
