import {Image, Text, TextInput, View} from 'react-native';
import style from './Verification.scss';
import React, {useState} from 'react';
import {styles} from '../../styles';

interface VerificationProps {
  verificationCode: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Verification = ({
  verificationCode,
  onConfirm,
  onCancel,
}: VerificationProps) => {
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState(false);

  const handleVerification = () => {
    if (verificationCode.toString() === code) {
      setCodeError(false);
      onConfirm();
    } else {
      setCodeError(true);
    }
  };

  return (
    <View style={style.container}>
      <Image source={require('../../assets/icon.png')} style={style.logo} />
      <Text style={[style.title, styles.elevation]}>Tú Asignatura</Text>
      <Text style={[style.subtitle, styles.elevation]}>
        Introduce el código enviado a tu correo
      </Text>
      {codeError && <Text style={styles.error}>El código es incorrecto</Text>}
      <TextInput
        style={[styles.input, styles.elevation]}
        placeholder="Código de verificación"
        value={code}
        onChangeText={setCode}
      />
      <Text
        onPress={handleVerification}
        style={[style.button, styles.elevation]}>
        Confirmar
      </Text>
      <Text onPress={onCancel} style={[style.buttonBack, styles.elevation]}>
        Cancelar
      </Text>
    </View>
  );
};

export default Verification;
