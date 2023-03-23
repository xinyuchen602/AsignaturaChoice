import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import Home from './src/screens/home/Home';
import Careers from './src/screens/career/Careers';
import Courses from './src/screens/course/Courses';
import Reviews from './src/screens/review/Reviews';
import NewReview from './src/screens/new_review/NewReview';
import NavBarButton from './src/components/NavBarButton';
import Profile from './src/screens/profile/Profile';

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
          headerRight: NavBarButton,
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
            title: 'Universidades',
          }}
        />
        <Stack.Screen
          name={'Profile'}
          component={Profile}
          options={{title: 'Perfil'}}
        />
        <Stack.Screen
          name="Careers"
          component={Careers}
          options={{
            title: 'Grados',
          }}
        />
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{
            title: 'Asignaturas',
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
