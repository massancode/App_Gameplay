import React from "react";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Text,View,Image } from "react-native";
import { theme } from "../../global/styles/theme";

type props ={
    urlImage:string;
}

export function Avatar ({urlImage}:props){
    const {secondary70,secondary100} =theme.colors 
    return(
    <View>
        <LinearGradient
        style={styles.container}
        colors={[secondary70,secondary100]}
        >
          <Image source={{uri: urlImage}} style={styles.avatar}  />
        </LinearGradient>
    </View>
    );
}
