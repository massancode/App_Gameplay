import React from "react";
import { styles } from "./styles";
import { Text,View } from "react-native";


export function Profile (){
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Rodrigo
                    </Text>
                </View>
                <Text style={styles.messsage}>
                    Hoje é dia de vitoria
                </Text>
            </View>
        </View>
    );
}
