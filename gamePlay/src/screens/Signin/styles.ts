//Tela Signin

import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme"


export const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
    },

    image:{
    width:'100%',
    height:360
    },
    content:{
        marginTop: -40,
        paddingHorizontal:50
    },
    title:{
        color:theme.colors.heading,
        fontSize:40,
        marginBottom:-95,
        textAlign:'center',
        fontFamily:theme.fonts.title700,
        lineHeight:40
        
        

    },
    subtitle:{
        color:theme.colors.heading,
        fontSize:15,
        textAlign:'center',
        marginTop:64,
        fontFamily:theme.fonts.title500,
        lineHeight:25
    }

    
})