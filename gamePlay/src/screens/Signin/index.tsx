//Tela Signin

import React, {useState} from 'react';
import {View,Text,TextInput,Image,StatusBar} from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';


export function SignIn() {

    return (
    <View style={styles.container}>
       
        <Image style={styles.image} source={IllustrationImg} resizeMode='stretch' />
    <View style={styles.content}>
  
     <Text style={styles.title}>
      Conecte-se  {'\n'}
    e organize suas {'\n'}
      jogatinas {'\n'}
     </Text>
     <Text style={styles.subtitle}>
         Crie um grupos para jogar seus games {'\n'}
         favoritos com seus amigos
     </Text>
     
    
     <ButtonIcon title='Entrar com dsicord'  activeOpacity={0.5} />
    </View>  
   
    </View>
  );
}