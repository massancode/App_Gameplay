import React from "react";          
import {Text,Image,View,TouchableOpacity} from 'react-native';

import DiscordIMG from '../../assets/discord.png'
import {styles} from './styles'

export function ButtonIcon (){
return (
  <TouchableOpacity style={styles.container}>
  <View>
    <Image source={DiscordIMG} style={styles.icon} />
  </View>
  <Text style={styles.title}>
    Entrar com discord
  </Text>
</TouchableOpacity>
)
}
