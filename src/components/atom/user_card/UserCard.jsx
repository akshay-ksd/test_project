import { View, Text,Image } from 'react-native'
import React from 'react';
import styles from './Style';
import useThemeStore from '../../../zustand/useThemeStore';
import { color } from '../../../theme/Color';

const UserCard = (props) => {
    //zustand
    const themeType = useThemeStore((state) => state.themeType)
  return (
    <View style={[styles.container,{backgroundColor:themeType == "light"? color.white:"grey"}]}>
        <Image style={styles.images} source={{uri:props.data.image}}/>
        <Text style={[styles.name,{color:themeType == "light"? color.black:color.white}]}>{props.data.name}</Text>
    </View>
  )
}

export default UserCard