import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/screens/login_screen/LoginScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen}/>
            <Stack.Screen name={"TabNavigator"} component={TabNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator