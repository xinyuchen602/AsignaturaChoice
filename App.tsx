import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import Home from './src/screens/home/Home';
import {Image} from 'react-native';
import {styles} from './src/styles';
import Career from './src/screens/career/Career';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#C1C1C1',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Image
              source={require('./src/assets/icon.png')}
              style={styles.logo}
            />
          ),
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tú Universidad',
          }}
        />
        <Stack.Screen
          name="Career"
          component={Career}
          options={{
            title: 'Tú Grado',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
