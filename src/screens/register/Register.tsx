import {Image, Text, TextInput, View} from 'react-native';
import style from './Register.scss';
import React, {useState} from 'react';
import {styles} from '../../../App';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={style.container}>
      <Image source={require('../../assets/icon.png')} style={style.logo} />
      <Text style={[style.title, styles.elevation]}>Tú Asignatura</Text>
      <TextInput
        style={[style.input, styles.elevation]}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[style.input, styles.elevation]}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[style.input, styles.elevation]}
        placeholder="Repetir contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={[style.button, styles.elevation]}>Registrarse</Text>
    </View>
  );
};

export default Register;
