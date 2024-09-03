import React from "react";
import { styles } from "./styles";
import { Text,View } from "react-native";
import { Avatar } from "../../components/Avatar";


export function Profile (){
    return(

        <View style={styles.container}>
            <Avatar urlImage="https://github.com/massancode.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Massan
                    </Text>
                </View>
                <Text style={styles.messsage}>
                    Hoje é dia de vitoria
                </Text>
            </View>
        </View>
    );
}
