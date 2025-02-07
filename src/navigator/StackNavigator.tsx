import { createStackNavigator } from '@react-navigation/stack';
import { BienvenidoScreen } from '../screens/BienvenidoScreen';
import { Imagen1Screen } from '../screens/Imagen1Screen';
import { MayorScreen } from '../screens/MayorScreen';
import { Menor } from '../screens/MenorScreen';
import { Imagen2Screen } from '../screens/Imagen2Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Bienvenido" component={BienvenidoScreen} options={{headerShown: false}}  />
      <Stack.Screen name="Imagen1" component={Imagen1Screen}  />
      <Stack.Screen name="Imagen2" component={Imagen2Screen}  />
      <Stack.Screen name="Mayor" component={MayorScreen} />
      <Stack.Screen name="Menor" component={Menor} />
    </Stack.Navigator>
  );
}