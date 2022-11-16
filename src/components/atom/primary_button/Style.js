import { Dimensions, StyleSheet } from "react-native";
import {color} from "../../../theme/Color"

const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    conatiner:{
        height: width/8,
        width: width/1.8,
        borderRadius:5,
        backgroundColor:color.primaryColor,
        alignItems:"center",
        justifyContent:"center"
    },
    mainContainer:{
        width:width,
        height:width/2,
        alignItems:"center",
        justifyContent:"center"
    },
    label:{
        fontSize:14,
        color:color.white
    }
});

export default styles;