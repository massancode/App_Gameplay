import React from "react";
import {createStackNavigator} from '@react-navigation/stack'

import { Home } from "../screens/Home";
import { SignIn } from "../screens/Signin";



const {Navigator,Screen}= createStackNavigator();

export function AuthRoutes (){
    return(
        <Navigator screenOptions={{
           headerShown:false,
           presentation:'modal'
        }}
            >
            <Screen 
           name="Signin"
           component={SignIn}>
           </Screen> 
           <Screen 
           name="Home"
           component={Home}>
           </Screen> 
        </Navigator>
    );
}
