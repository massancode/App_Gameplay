import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:56,
        backgroundColor:theme.colors.secondary30,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        marginTop:65
    },
    title:{
        flex:1,
        color:theme.colors.heading,
        fontSize:15,
        textAlign:'center'
    },
    iconWrapper:{
        width:56,
        height:56,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderBlockColor:theme.colors.line
    },
    icon:{
        width:24
    },


})