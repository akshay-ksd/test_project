import { Dimensions, StyleSheet } from "react-native";
const {width,height} = Dimensions.get("window")
const styles = StyleSheet.create({
    container:{
        width:width/2.5,
        height: width/2.5,
        borderRadius:10,
        marginHorizontal:15,
        marginVertical:5,
        padding:5,
        elevation:3
    },
    images:{
        width:"100%",
        height: "80%",
        borderRadius:5,
    },
    name:{
        fontSize:14,
        fontWeight:"600",
        marginLeft:5,
        top:5
    }
});

export default styles