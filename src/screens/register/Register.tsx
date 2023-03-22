import {ActivityIndicator, Image, Text, TextInput, View} from 'react-native';
import style from './Register.scss';
import React, {useState} from 'react';
import {base_grey, styles} from '../../styles';
import {base_url, email_regex} from '../../constants';
import api from '../../api/api';

const Register = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    if (!email_regex.test(email)) {
      setEmailError(true);
      setLoading(false);
      return;
    } else {
      setEmailError(false);
    }
    api
      .post(`${base_url}register.php`, {
        username: username,
        email: email,
        password: password,
      })
      .then(() => {
        setLoading(false);
        setUsernameError(false);
        navigation.goBack();
      })
      .catch(() => {
        setLoading(false);
        setUsernameError(true);
      });
  };

  return (
    <View style={style.container}>
      <Image source={require('../../assets/icon.png')} style={style.logo} />
      <Text style={[style.title, styles.elevation]}>Tú Asignatura</Text>
      {usernameError && (
        <Text style={styles.error}>El nombre de usuario ya está tomado</Text>
      )}
      <TextInput
        style={[styles.input, styles.elevation]}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      {emailError && <Text style={styles.error}>El email no es válido</Text>}
      <TextInput
        style={[styles.input, styles.elevation]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
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
        <Text onPress={handleRegister} style={[style.button, styles.elevation]}>
          Registrarse
        </Text>
      )}
      <Text
        onPress={() => navigation.goBack()}
        style={[style.buttonBack, styles.elevation]}>
        Cancelar
      </Text>
    </View>
  );
};

export default Register;
