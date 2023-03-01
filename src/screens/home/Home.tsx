import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import style from './Home.scss';
import {styles} from '../../styles';
import {University} from '../../model/model';
import axios from 'axios';
import {base_url} from '../../constants';

const Home = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [universities, setUniversities] = useState<University[]>([
    {id: 1, name: 'Universidad 1'},
    {id: 2, name: 'Universidad 2'},
    {id: 3, name: 'Universidad 3'},
    {id: 4, name: 'Universidad 4'},
    {id: 5, name: 'Universidad 5'},
    {id: 6, name: 'Universidad 6'},
    {id: 7, name: 'Universidad 7'},
    {id: 8, name: 'Universidad 8'},
    {id: 9, name: 'Universidad 9'},
    {id: 10, name: 'Universidad 10'},
    {id: 11, name: 'Universidad 11'},
    {id: 12, name: 'Universidad 12'},
  ]);

  axios
    .get(`${base_url}university`)
    .then(response => {
      setUniversities(response.data);
    })
    .catch(error => {
      console.log(error);
    });

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
        {universities
          .filter(university =>
            university.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map(university => (
            <TouchableOpacity
              onPress={() => navigation.push('Career')}
              key={university.id}
              style={style.card}>
              <Text style={style.cardTitle}>{university.name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default Home;
