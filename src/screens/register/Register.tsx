import {Image, Text, TextInput, View} from 'react-native';
import style from './Register.scss';
import React, {useState} from 'react';
import {styles} from '../../styles';

const Register = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    navigation.goBack();
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
      <TextInput
        style={[styles.input, styles.elevation]}
        placeholder="Repetir contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text onPress={handleRegister} style={[style.button, styles.elevation]}>
        Registrarse
      </Text>
      <Text
        onPress={() => navigation.goBack()}
        style={[style.buttonBack, styles.elevation]}>
        Cancelar
      </Text>
    </View>
  );
};

export default Register;
