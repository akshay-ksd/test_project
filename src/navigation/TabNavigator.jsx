import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from "react-native-vector-icons/Ionicons";
import {color} from "../theme/Color"

//screens
import HomeScreen from '../components/screens/home_screen/HomeScreen';
import SettingScreen from '../components/screens/setting_screen/SettingScreen';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({focused})=>(
        <Icons name="home" size={18} color={focused?color.white:"grey"}/>
      )}}/>
      <Tab.Screen name="Settings" component={SettingScreen} options={{tabBarIcon:({focused})=>(
        <Icons name="settings" size={18} color={focused?color.white:"grey"}/>
      )}}/>
    </Tab.Navigator>
  )
}

export default TabNavigator