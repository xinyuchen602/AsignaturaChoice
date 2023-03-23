import React, {useEffect, useState} from 'react';
import {View, TextInput, Text, Image, ActivityIndicator} from 'react-native';
import style from './Login.scss';
import {base_grey, styles} from '../../styles';
import api from '../../api/api';
import LoginInstance from '../../api/LoginInstance';
import {getUser, storeUser} from '../../storage/AsyncStorage';

const Login = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    console.log('Loading user...');
    getUser().then(user => {
      if (user) {
        LoginInstance.saveLogIn(JSON.parse(user));
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      } else {
        setLoadingUser(false);
      }
    });
  }, [navigation]);

  const handleLogin = () => {
    setLoading(true);
    api
      .post('login.php', {
        username: username,
        password: password,
      })
      .then(response => {
        setLoading(false);
        setLoginError(false);
        LoginInstance.saveLogIn(response.data);
        storeUser(response.data).then(() => {
          console.log('User stored');
        });
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      })
      .catch(() => {
        setLoading(false);
        setLoginError(true);
      });
  };

  const handleRegister = () => {
    navigation.push('Register');
  };

  if (loadingUser) {
    return (
      <View style={style.container}>
        <Image source={require('../../assets/icon.png')} style={style.logo} />
        <Text style={[style.title, styles.elevation]}>Tú Asignatura</Text>
        <ActivityIndicator size={'large'} color={base_grey} />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Image source={require('../../assets/icon.png')} style={style.logo} />
      <Text style={[style.title, styles.elevation]}>Tú Asignatura</Text>
      {loginError && (
        <Text style={styles.error}>Las credenciales son incorrectas</Text>
      )}
      <TextInput
        style={[styles.input, styles.elevation]}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, styles.elevation]}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator
          style={[style.button, styles.elevation]}
          color={base_grey}
        />
      ) : (
        <Text style={[style.button, styles.elevation]} onPress={handleLogin}>
          Entrar
        </Text>
      )}
      <Text
        style={[style.registerText, styles.elevation]}
        onPress={handleRegister}>
        ¿No tienes cuenta?
      </Text>
    </View>
  );
};

export default Login;
