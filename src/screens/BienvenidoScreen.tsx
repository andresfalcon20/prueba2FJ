import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import 'react-native-gesture-handler';
import { styles } from '../theme/AppTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';



export const BienvenidoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.textBienvenido}>BIENVENIDO</Text>

           
            <TouchableOpacity style={styles.button} onPress={()=> navigation.dispatch(CommonActions.navigate({name: "Imagen1"}))}>
            <Text style={styles.buttonText}>Imagen 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.dispatch(CommonActions.navigate({name: "Imagen"}))} >
            <Text style={styles.buttonText}>Imagen 2 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.dispatch(CommonActions.navigate({name: "Mayor"}))}>
            <Text style={styles.buttonText}>Mayor o Igual </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=> navigation.dispatch(CommonActions.navigate({name: "Menor"}))}>
                <Text style={styles.buttonText}>Menor o Igual </Text>
            </TouchableOpacity>
        </View>
    );
};
