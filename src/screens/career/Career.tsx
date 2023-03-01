import React, {useState} from 'react';
import {View, TextInput, ScrollView, Text} from 'react-native';
import style from './Career.scss';
import {styles} from '../../styles';

const Career = () => {
  const [search, setSearch] = useState('');
  const [careers, setCareers] = useState([
    'Grado 1',
    'Grado 2',
    'Grado 3',
    'Grado 4',
    'Grado 5',
    'Grado 6',
    'Grado 7',
    'Grado 8',
    'Grado 9',
    'Grado 10',
    'Grado 11',
    'Grado 12',
  ]);
  return (
    <View style={style.container}>
      <TextInput
        style={[style.input, styles.elevation]}
        placeholder="Buscar"
        value={search}
        onChangeText={value => {
          setSearch(value);
        }}
      />
      <ScrollView style={style.scroll}>
        {careers
          .filter(career => career.toLowerCase().includes(search.toLowerCase()))
          .map(career => (
            <View key={career} style={style.card}>
              <Text style={style.cardTitle}>{career}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Career;
