import React from "react";
import { View } from "react-native";
import { style } from "./styles";
import { Profile } from "../Profile";


export function Home () {
    return (
       <View>
         <View style={style.header}>
            <Profile/>
         </View>
       </View>
    );
}