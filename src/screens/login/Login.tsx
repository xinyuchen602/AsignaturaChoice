import React, {useState} from 'react';
import {View, TextInput, Text, Image} from 'react-native';
import style from './Login.scss';
import {styles} from '../../styles';
import axios from 'axios';
import {base_url} from '../../constants';

const Login = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post(`${base_url}login2.php`, {
        username: username,
        password: password,
      })
      .then(response => {
        console.log(response);
        navigation.push('Home');
      })
      .catch(error => {
        // navigation.push('Home');
        console.log(error);
      });
  };

  const handleRegister = () => {
    navigation.push('Register');
  };

  return (
    <View style={style.container}>
      <Image source={require('../../assets/icon.png')} style={style.logo} />
      <Text style={[style.title, styles.elevation]}>Tú Asignatura</Text>
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
      <Text style={[style.button, styles.elevation]} onPress={handleLogin}>
        Entrar
      </Text>
      <Text
        style={[style.registerText, styles.elevation]}
        onPress={handleRegister}>
        ¿No tienes cuenta?
      </Text>
    </View>
  );
};

export default Login;
