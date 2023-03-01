import React, {useState} from 'react';
import {View, TextInput, ScrollView, Text} from 'react-native';
import style from './Review.scss';
import {styles} from './../styles';

const Review = () => {
  const [search, setSearch] = useState('');
  const [reviews, setReviews] = useState([
    'Review 1',
    'Review 2',
    'Review 3',
    'Review 4',
    'Review 5',
    'Review 6',
    'Review 7',
    'Review 8',
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
