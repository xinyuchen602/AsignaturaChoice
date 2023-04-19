import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import * as React from 'react';
import {base_grey, styles} from '../../styles';
import {Review, User} from '../../model/model';
import api from '../../api/api';
import {useEffect, useState} from 'react';
import style from './Profile.scss';
import LoginInstance from '../../api/LoginInstance';
import {AirbnbRating} from 'react-native-ratings';
import {removeUser} from '../../storage/AsyncStorage';
import {DefaultBanner} from '../../components/DefaultBanner';

const Profile = ({navigation, route}: any) => {
  const {id} = route.params;
  const [user, setUser] = useState<User>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`profile.php?user_id=${id}`)
      .then(response => {
        setUser(response.data.user);
        setReviews(response.data.review);
        setLoading(false);
      })
      .catch(() => {});
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={base_grey} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={style.card}>
        <Text style={[style.cardTitleText, styles.elevation]}>
          {user?.username}
        </Text>
        <Text style={[style.cardTitleText, styles.elevation]}>
          {user?.email}
        </Text>
      </View>
      <ScrollView style={styles.fullSizeBox}>
        {reviews.map(review => (
          <View key={review.id} style={style.card}>
            <View style={style.cardTitle}>
              <Text
                onPress={() => {
                  navigation.push('Reviews', {
                    courseId: review.course_id,
                    name: review.name,
                  });
                }}
                style={style.cardTitleText}>
                {review.name}
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
        ))}
      </ScrollView>
      {LoginInstance.user?.id === id && (
        <Text
          onPress={() => {
            removeUser().then(() => {
              LoginInstance.logOut();
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              });
            });
          }}
          style={[style.buttonBack]}>
          Cerrar Sesión
        </Text>
      )}
      <DefaultBanner />
    </View>
  );
};

export default Profile;
