import { View, Text } from 'react-native'
import React from 'react'
import styles from './style';
import LoginInput from '../../atom/login_input/LoginInput';
import PrimaryButton from '../../atom/primary_button/PrimaryButton';
import { Auth } from '../../constants/Auth';
import { useNavigation } from '@react-navigation/native';
import useThemeStore from '../../../zustand/useThemeStore';
import { color } from '../../../theme/Color';

const LoginScreen = () => {
    //ref
    const userName = React.useRef(null);
    const password = React.useRef(null);

    //hook
    const navigation = useNavigation();

    //zustand
    const themtype = useThemeStore((state) => state.themeType)

    //functions
    const onChangeText =(value,isPassword)=>{
        if(isPassword){
            password.current = value
        }else{
            userName.current = value
        }
    }

    const Login =()=> {
        if(password.current !== null & userName.current !== null){
            if(userName.current == Auth.userName){
                if(password.current == Auth.password){
                    navigation.navigate("TabNavigator")
                }
            }
        }
    }

  return (
    <View style={[styles.container,{backgroundColor: themtype == "light"? color.white:color.black}]}>
        <View style={styles.inputView}>
            <LoginInput placeholder={"Enter username"}
                        isPassword={false}
                        onChangeText={onChangeText}/>
            <LoginInput placeholder={"Enter Password"}
                        isPassword={true}
                        onChangeText={onChangeText}/>
        </View>
        <View style={styles.authButtonView}>
                <PrimaryButton label={"Login"} onPressButton={Login}/>
        </View>
    </View>
  )
}

export default LoginScreen