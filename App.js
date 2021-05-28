import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
//import {AppContainer} from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from "./screens/SignUpLoginScreen";
import ExchangeScreen from "./screens/ExchangeScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <AppContainer/>
  );
}

const tabNavigator = createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen},
  ExchangeScreen:{screen:ExchangeScreen}
})

const SwitchNavigator= createSwitchNavigator({ 
  SignUpLoginScreen:{screen:SignUpLoginScreen}, 
  TabNavigator:{screen:tabNavigator} 
}) 
const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
