import { StyleSheet,Dimensions } from "react-native";
const {width,height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        width: width-width/10,
        height: width/8,
        justifyContent:"center",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:5,
        elevation:3
    },
    mainContainer:{
        width:width,
        height:width/2,
        alignItems:"center",
        justifyContent:"center"
    }
});

export default styles;