import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Style'
import {data} from "../../constants/UserData";
import UserCard from '../../atom/user_card/UserCard';
import useThemeStore from '../../../zustand/useThemeStore';
import { color } from '../../../theme/Color';

const HomeScreen = () => {

    //zustand
    const themeType = useThemeStore((state) => state.themeType)


    const renderItem =(item,index) => {
        return(
            <UserCard data={item.item}/>
        )
    }
  return (
    <View style={[styles.container,{backgroundColor:themeType == "light" ? color.white:color.black}]}>
        <FlatList data={data}
                  style={styles.container}
                  renderItem={renderItem}
                  numColumns={2}
                  keyExtractor={(item) => item.id}/>
    </View>
  )
}

export default HomeScreen