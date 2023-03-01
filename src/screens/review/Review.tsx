import React, {useState} from 'react';
import {View, TextInput, ScrollView, Text} from 'react-native';
import style from './Review.scss';
import {styles} from '../../styles';

const Review = () => {
  const [search, setSearch] = useState('');
  const [reviews, setReviews] = useState([
    'Course 1',
    'Course 2',
    'Course 3',
    'Course 4',
    'Course 5',
    'Course 6',
    'Course 7',
    'Course 8',
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
        {reviews
          .filter(review => review.toLowerCase().includes(search.toLowerCase()))
          .map(review => (
            <View key={review} style={style.card}>
              <Text style={style.cardTitle}>{review}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Review;
