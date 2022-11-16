import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container:{
        width:width,
        height:width/5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        justifyContent:"space-evenly"
    }
});

export default styles