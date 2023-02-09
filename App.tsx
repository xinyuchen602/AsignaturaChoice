import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login/Login';
import {StyleSheet} from 'react-native';
import Register from './src/screens/register/Register';

const Stack = createNativeStackNavigator();

export const styles = StyleSheet.create({
  elevation: {
    elevation: 5,
    shadowColor: '#000000',
  },
});
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
