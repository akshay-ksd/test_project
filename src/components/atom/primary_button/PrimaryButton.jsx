import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './Style';

const PrimaryButton = (props) => {
    const onPressButton =()=> {
        props.onPressButton()
    }
  return (
    <View style={styles.mainContainer}>
    <TouchableOpacity onPress={onPressButton} style={styles.conatiner}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default PrimaryButton