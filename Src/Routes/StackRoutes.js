import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home,Login,purpleui1, purpleui2, purpleui3,mountui1,mountui2,mountui3,mountui4,mountui5,linkedin } from '../Screens';
import LinkedIn1 from '../Screens/linkedin1';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
  
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='mountui1'>
        <Stack.Screen name="purpleui1" component={purpleui1} /> 
        <Stack.Screen name="purpleui2" component={purpleui2} />
        <Stack.Screen name="purpleui3" component={purpleui3} /> 
        <Stack.Screen name="mountui1" component={mountui1} />
        <Stack.Screen name="mountui2" component={mountui2} />
        <Stack.Screen name="mountui3" component={mountui3} />
        <Stack.Screen name="mountui4" component={mountui4} />
        <Stack.Screen name="mountui5" component={mountui5} />
        <Stack.Screen name="linkedin" component={linkedin} />
        <Stack.Screen name="linkedin1" component={LinkedIn1} />
      </Stack.Navigator>
   
  );
};
export default StackRoutes; 