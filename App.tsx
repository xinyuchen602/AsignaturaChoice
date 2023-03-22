import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import Home from './src/screens/home/Home';
import {Image} from 'react-native';
import {styles} from './src/styles';
import Careers from './src/screens/career/Careers';
import Courses from './src/screens/course/Courses';
import Reviews from './src/screens/review/Reviews';
import NewReview from './src/screens/new_review/NewReview';

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
          name="Careers"
          component={Careers}
          options={{
            title: 'Tú Grado',
          }}
        />
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{
            title: 'Tú Asignatura',
          }}
        />
        <Stack.Screen
          name="Reviews"
          component={Reviews}
          options={{
            title: 'Comentarios',
          }}
        />
        <Stack.Screen
          name="NewReview"
          component={NewReview}
          options={{
            title: 'Tú Comentario',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
