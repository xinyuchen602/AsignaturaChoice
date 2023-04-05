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
import {base_grey, base_orange, styles} from '../../styles';
import {Review} from '../../model/model';
import {AirbnbRating} from 'react-native-ratings';
import api from '../../api/api';
import LoginInstance from '../../api/LoginInstance';

const Reviews = ({route, navigation}: any) => {
  const {courseId, name} = route.params;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [userReview, setUserReview] = useState<Review>();

  const getReviews = useCallback(() => {
    setLoading(true);
    api
      .get(`review.php?course_id=${courseId}`)
      .then(response => {
        setReviews(response.data);
        navigation.setOptions({title: name});
        setLoading(false);
      })
      .catch(() => {});
  }, [courseId, name, navigation]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  useEffect(() => {
    reviews.find(review => review.user_id === LoginInstance.user?.id) &&
      setUserReview(
        reviews.find(review => review.user_id === LoginInstance.user?.id),
      );
  }, [reviews]);

  const handleDelete = () => {
    api
      .delete(`delete_review.php?id=${userReview?.id}`)
      .then(() => {
        setUserReview(undefined);
        getReviews();
      })
      .catch(() => {});
  };

  function buildReviewCard(review: Review, color: string | null = null) {
    return (
      <View
        key={review.id}
        style={
          color
            ? [style.card, color && {borderColor: color, borderWidth: 3}]
            : [style.card]
        }>
        <View style={style.cardTitle}>
          <Text
            onPress={() => navigation.push('Profile', {id: review.user_id})}
            style={style.cardTitleText}>
            {review.username}
          </Text>
          <AirbnbRating
            defaultRating={review.score}
            selectedColor={'#000000'}
            showRating={false}
            size={20}
            isDisabled={true}
          />
        </View>
        <Text style={style.cardText}>{review.text}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[style.reviewSummary, styles.elevation]}>
        <Text style={style.cardTitleText}>
          {reviews.length} reseñas totales
        </Text>
        <Image source={require('../../assets/star.png')} style={style.star} />
      </View>
      <ScrollView style={styles.fullSizeBox}>
        {!loading && userReview && buildReviewCard(userReview, base_orange)}
        {!loading ? (
          reviews
            .filter(review => review.user_id !== LoginInstance.user?.id)
            .map(review => buildReviewCard(review))
        ) : (
          <ActivityIndicator size={'large'} color={base_grey} />
        )}
      </ScrollView>
      <View style={style.floatingButtonContainer}>
        {userReview && (
          <TouchableOpacity
            onPress={() => {
              handleDelete();
            }}
            style={[styles.elevation, style.floatingButton]}>
            <Image
              source={require('../../assets/delete_icon.png')}
              style={style.floatingButtonImg}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            if (userReview) {
              navigation.push('EditReview', {
                review: reviews.find(
                  review => review.user_id === LoginInstance.user?.id,
                ),
                onReviewEdited: getReviews,
              });
            } else {
              navigation.push('NewReview', {
                courseId: courseId,
                onReviewAdded: getReviews,
              });
            }
          }}
          style={[styles.elevation, style.floatingButton]}>
          {userReview ? (
            <Image
              source={require('../../assets/edit_icon.png')}
              style={style.floatingButtonImg}
            />
          ) : (
            <Text style={style.floatingButtonText}>+</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reviews;
