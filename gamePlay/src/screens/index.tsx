import React, {useState} from 'react';
import {View,Text,TextInput,Image,StatusBar} from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../src/assets/illustration.png';

import  {ButtonIcon}  from '../components/ButtonIcon';

export function SignIn() {

    return (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'} backgroundColor={"transparent"} translucent />    
        <Image style={styles.image} source={IllustrationImg} resizeMode='stretch' />
    <View style={styles.content}>
  
     <Text style={styles.title}>
      Organize sua {'\n'}
      Jogatinas {'\n'}
      Facilmente {'\n'}
     </Text>
     <ButtonIcon/>
     <Text style={styles.subtitle}>
         Crie um grupos para jogar seus games {'\n'}
         favoritos com seus amigos
     </Text>
     
    </View>  
   
    </View>
  );
}