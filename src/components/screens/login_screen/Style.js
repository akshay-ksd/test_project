import { Dimensions, StyleSheet } from "react-native";
const {width,height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%"
    },
    inputView:{
        height:height/2,
        width:width,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    authButtonView:{
        flex:1,
        backgroundColor:"red"
    }
});

export default styles;