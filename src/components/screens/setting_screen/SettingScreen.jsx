import { View, Text } from 'react-native'
import React from 'react';
import styles from './Style';
import ToggleButton from '../../atom/toggle_button/ToggleButton';
import useThemeStore from '../../../zustand/useThemeStore';
import {color} from "../../../theme/Color"

const SettingScreen = () => {

    //zustand
    const themeType = useThemeStore((state)=> state.themeType)
  return (
    <View style={[styles.container,{backgroundColor: themeType == "light"? color.white:color.black}]}>
        <ToggleButton/>
    </View>
  )
}

export default SettingScreen