import React from 'react';

import { StatusBar } from 'react-native';
import {useFonts} from 'expo-font';
import {Inter_400Regular,Inter_500Medium} from '@expo-google-fonts/inter'
import {Rajdhani_500Medium,Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'

import AppLoading from 'expo-app-loading';

import { Background } from './src/components/backgorund';

import { SignIn } from './src/screens/Signin';
import { Home } from './src/screens/Home';
import { Profile } from './src/screens/Profile';

import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] =useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

   if(!fontsLoaded){
    return <AppLoading/>
   }


  return (
    <Background>
    <StatusBar barStyle={'light-content'} backgroundColor={"transparent"} translucent /> 
         <Routes/>
    </Background>
  );
}