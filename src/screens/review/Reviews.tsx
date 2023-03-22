import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import style from './Reviews.scss';
import {base_grey, styles} from '../../styles';
import {Review} from '../../model/model';
import {AirbnbRating} from 'react-native-ratings';
import api from '../../api/api';

const Reviews = ({route, navigation}: any) => {
  const {courseId} = route.params;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const getReviews = useCallback(() => {
    setLoading(true);
    api
      .get(`review.php?course_id=${courseId}`)
      .then(response => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch(() => {});
  }, [courseId]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <View style={styles.container}>
      <View style={[style.reviewSummary, styles.elevation]}>
        <Text>{reviews.length} reseñas totales</Text>
        <Image source={require('../../assets/star.png')} style={style.star} />
      </View>
      <ScrollView style={styles.fullSizeBox}>
        {!loading ? (
          reviews.map(review => (
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
      <TouchableOpacity
        onPress={() =>
          navigation.push('NewReview', {
            courseId: courseId,
            onReviewAdded: getReviews,
          })
        }
        style={style.floatingButton}>
        <Text style={style.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reviews;
