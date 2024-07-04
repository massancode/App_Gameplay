import React from "react";          
import {Text,Image,View,TouchableOpacity,TouchableOpacityProps} from 'react-native';

import DiscordIMG from '../../assets/discord.png'
import {styles} from './styles'
import { Double } from "react-native/Libraries/Types/CodegenTypes";

type Props = { 
  title:string,
  
} & TouchableOpacityProps

export function ButtonIcon ({title,...rest}:Props){
return (
  <TouchableOpacity style={styles.container} {...rest}>
  <View style={styles.iconWrapper}>
    <Image source={DiscordIMG} style={styles.icon} />
  </View>
  <Text style={styles.title}>
    {title}
    
  </Text>
</TouchableOpacity>
)
}
