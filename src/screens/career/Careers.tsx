import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from './Careers.scss';
import {base_grey, styles} from '../../styles';
import axios from 'axios/index';
import {base_url} from '../../constants';
import {Career} from '../../model/model';

const Careers = ({route, navigation}: any) => {
  const {universityId} = route.params;
  const [search, setSearch] = useState('');
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  axios
    .get(`${base_url}career.php?university_id=${universityId}`)
    .then(response => {
      setCareers(response.data);
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
          careers
            .filter(career =>
              career.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map(career => (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('Courses', {careerId: career.id})
                }
                key={career.id}
                style={style.card}>
                <Text style={style.cardTitle}>{career.name}</Text>
              </TouchableOpacity>
            ))
        ) : (
          <ActivityIndicator size={'large'} color={base_grey} />
        )}
      </ScrollView>
    </View>
  );
};

export default Careers;
