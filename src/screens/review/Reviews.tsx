import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import style from './Reviews.scss';
import {base_grey, styles} from '../../styles';
import {Review} from '../../model/model';
import axios from 'axios';
import {base_url} from '../../constants';
import {AirbnbRating, Rating} from 'react-native-ratings';

const Reviews = ({route, navigation}: any) => {
  const {courseId} = route.params;
  const [search, setSearch] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  axios
    .get(`${base_url}review.php?course_id=${courseId}`)
    .then(response => {
      setReviews(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <View style={style.container}>
      <View style={[style.reviewSummary, styles.elevation]}>
        <Text>{reviews.length} reseñas totales</Text>
        <Image source={require('../../assets/star.png')} style={style.star} />
      </View>
      <ScrollView style={style.scroll}>
        {!loading ? (
          reviews
            .filter(review =>
              review.text.toLowerCase().includes(search.toLowerCase()),
            )
            .map(review => (
              <View key={review.id} style={style.card}>
                <View style={style.cardTitle}>
                  <Text>{review.username}</Text>
                  <AirbnbRating
                    defaultRating={review.score}
                    selectedColor={'#000000'}
                    showRating={false}
                    size={20}
                    isDisabled={true}
                  />
                </View>
                <Text>{review.text}</Text>
              </View>
            ))
        ) : (
          <ActivityIndicator size={'large'} color={base_grey} />
        )}
      </ScrollView>
    </View>
  );
};

export default Reviews;
