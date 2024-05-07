import { StyleSheet } from "react-native";
import {theme} from "../global/styles/theme"


export const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:theme.colors.backgorund,
     justifyContent:'center',
     alignItems:'center'
    },

    image:{
    width:'100%',
    height:360
    },
    content:{
        marginTop: -40
    },
    title:{
        color:theme.colors.heading,
        fontSize:40,
        marginBottom:16,
        textAlign:'center'
    },
    subtitle:{
        color:theme.colors.heading,
        fontSize:15,
        textAlign:'center',
        marginTop:64
    }

    
})