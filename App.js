import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import Drawer from './src/navigation/Drawer';
import { store } from './redux/store';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer></Drawer>
    </NavigationContainer>
    </Provider>
  );
}
