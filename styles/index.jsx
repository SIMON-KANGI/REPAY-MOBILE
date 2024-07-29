import { StyleSheet } from "react-native";

const textStyles = StyleSheet.create({
    textbold:{
        fontWeight:"bold",
        fontSize:30,
        color:"black"

    },
    textnormal:{
        fontWeight:"normal",
        fontSize:18,
        color:"black",
        paddingLeft:10

    },
    textsmall:{
        fontWeight:"thin",
        fontSize:12,
        color:"#0000"

    },
    textcenter:{
        textAlign:"center"
    }
    
});
const btnStyles = StyleSheet.create({
    largeBtn:{
        width:"full",
        padding:15,
        borderRadius:10,
        backgroundColor:"black",
        fontSize:18,
        fontWeight:"bold",
        margin:10,
    },
    largeBtn2:{
        width:"full",
        padding:15,
        borderRadius:10,
        backgroundColor:"red",
       margin:10,
        fontSize:18,
        fontWeight:"bold"
    }
});



export {textStyles, btnStyles}