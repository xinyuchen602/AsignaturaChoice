import React, {useState} from 'react';
import {ActivityIndicator, Text, TextInput, View} from 'react-native';
import {base_grey, styles} from '../../styles';
import style from './NewReview.scss';
import {AirbnbRating} from 'react-native-ratings';
import api from '../../api/api';
import LoginInstance from '../../api/LoginInstance';

const NewReview = ({navigation, route}: any) => {
  const {courseId, onReviewAdded} = route.params;
  const [score, setScore] = useState(1);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePublish = () => {
    setLoading(true);
    api
      .post('create_review.php', {
        course_id: courseId,
        user_id: LoginInstance.user?.id,
        score: score,
        text: text,
      })
      .then(() => {
        setLoading(false);
        onReviewAdded.call();
        navigation.goBack();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={style.card}>
        <View style={style.cardTitle}>
          <Text>{score}/5</Text>
          <AirbnbRating
            defaultRating={score}
            onFinishRating={value => setScore(value)}
            selectedColor={'#000000'}
            showRating={false}
            size={20}
          />
        </View>
        <TextInput
          style={[style.input]}
          placeholder="¿Qué piensas de esta asignatura...?"
          value={text}
          onChangeText={value => {
            setText(value);
          }}
          multiline={true}
          maxLength={1027}
        />
      </View>
      {!loading ? (
        <Text onPress={handlePublish} style={[style.button, styles.elevation]}>
          Publicar
        </Text>
      ) : (
        <ActivityIndicator
          style={[style.button, styles.elevation]}
          color={base_grey}
        />
      )}
      <Text
        onPress={() => navigation.goBack()}
        style={[style.buttonBack, styles.elevation]}>
        Cancelar
      </Text>
    </View>
  );
};

export default NewReview;
