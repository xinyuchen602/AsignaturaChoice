import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from './Home.scss';
import {base_grey, styles} from '../../styles';
import {University} from '../../model/model';
import axios from 'axios';
import {base_url} from '../../constants';

const Home = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);

  axios
    .get(`${base_url}university.php`)
    .then(response => {
      setUniversities(response.data);
      setLoading(false);
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
        {!loading ? (
          universities
            .filter(university =>
              university.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map(university => (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('Careers', {universityId: university.id})
                }
                key={university.id}
                style={style.card}>
                <Text style={style.cardTitle}>{university.name}</Text>
              </TouchableOpacity>
            ))
        ) : (
          <ActivityIndicator size={'large'} color={base_grey} />
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
