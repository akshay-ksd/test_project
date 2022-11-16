import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Style';
import useThemeStore from '../../../zustand/useThemeStore';
import { color } from '../../../theme/Color';

const LoginInput = props => {

  //zustand
  const themtype = useThemeStore((state) => state.themeType)

  const onChangeText = text => {
    props.onChangeText(text,props.isPassword)
  };
  return (
    <View style={styles.mainContainer}>
    <View style={[styles.container,{backgroundColor:themtype == "light"? color.white:"grey"}]}>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        onChangeText={onChangeText}
        style={{color:themtype == "light"? color.black:color.white}}
      />
    </View>
    </View>
    
  );
};

export default LoginInput;
