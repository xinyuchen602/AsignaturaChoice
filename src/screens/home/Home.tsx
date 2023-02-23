import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import style from './Home.scss';
import {styles} from '../../styles';

const Home = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [universities, setUniversities] = useState([
    'Universidad 1',
    'Universidad 2',
    'Universidad 3',
    'Universidad 4',
    'Universidad 5',
    'Universidad 6',
    'Universidad 7',
    'Universidad 8',
    'Universidad 9',
    'Universidad 10',
    'Universidad 11',
    'Universidad 12',
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
        {universities
          .filter(university =>
            university.toLowerCase().includes(search.toLowerCase()),
          )
          .map(university => (
            <TouchableOpacity
              onPress={() => navigation.push('Career')}
              key={university}
              style={style.card}>
              <Text style={style.cardTitle}>{university}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default Home;
