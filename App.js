import { View, Text } from 'react-native'
import React from 'react'
import StackNavigator from './src/navigation/StackNavigator'

const App = () => {
  return (
    <View style={{flex:1}}>
      <StackNavigator/>
    </View>
  )
}

export default App