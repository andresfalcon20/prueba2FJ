import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/AppTheme';

export const Imagen2Screen = () => {
  return (
    <View>
     <Text style= {styles.textImg}>
        IMAGEN 2
     </Text>
        <Image 
          style={styles.imagen}
          source={require('../screens/imagen2.jpg')} 
        />
    </View>
  );
};