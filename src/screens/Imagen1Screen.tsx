import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/AppTheme';

export const Imagen1Screen = () => {
  return (
    <View>
     <Text style= {styles.textImg}>
        IMAGEN 1
     </Text>
        <Image 
          style={styles.imagen}
          source={require('../screens/imagen.jpg')} 
        />
    </View>
  );
};