import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { NumeroComponent } from '../components/NumeroComponent';
import { styles } from '../theme/AppTheme';

export const MayorScreen = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const Comparacion = () => {

        if (num1 > num2) {
            setResult( `${num1} es mayor que ${num2}`);
        } else if (num1 === num2) {
          setResult( `${num1} es igual que ${num2}`);
        } else {
          setResult( `${num1} no es mayor que ${num2}`);
  
        }
    };

    return (
        <View style={styles.container}>
            <Text>COMPARACION</Text>
            <NumeroComponent
                placeholder="Ingrese el primer numero"
                onChangeText={(setNum1)}
                value={num1}
            />
            <NumeroComponent
                placeholder="Ingrese el segundo numero"
                onChangeText={(setNum2)}
                value={num2}
            />

    <Button title=">=" onPress={Comparacion} />
    <Text>{result}</Text>


        </View>
    );
};