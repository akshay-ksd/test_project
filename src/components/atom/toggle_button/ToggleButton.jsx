import { View, Text } from 'react-native'
import React from 'react'
import styles from './Style'
import { Switch } from 'react-native-paper';
import useThemeStore from '../../../zustand/useThemeStore';
import { color } from '../../../theme/Color';


const ToggleButton = () => {
  //state
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  //function
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn)
    if(theme == "light"){
        setTheme("dark")
    }else{
        setTheme("light")
    }
  };

  //zustand
  const setTheme = useThemeStore((state) => state.setThemeType);
  const theme = useThemeStore((state) => state.themeType);

  React.useEffect(() => {
    if(theme == "light"){
        setIsSwitchOn(false)
    }else{
        setIsSwitchOn(true)
    }
  },[])

  return (
    <View style={styles.container}>
        <Text style={{color:theme == "light" ? color.black:color.white}}>Change Theme - {theme}</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  )
}

export default ToggleButton