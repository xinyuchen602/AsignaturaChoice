import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import style from './Career.scss';
import {styles} from '../../styles';

const Career = ({navigation}: any) => {
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
    <View style={styles.container}>
      <TextInput
        style={[styles.searchBar, styles.elevation]}
        placeholder="Buscar"
        value={search}
        onChangeText={value => {
          setSearch(value);
        }}
      />
      <ScrollView style={styles.fullSizeBox}>
        {careers
          .filter(career => career.toLowerCase().includes(search.toLowerCase()))
          .map(career => (
            <TouchableOpacity
              onPress={() => navigation.push('Course')}
              key={career}
              style={style.card}>
              <Text style={style.cardTitle}>{career}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default Career;
