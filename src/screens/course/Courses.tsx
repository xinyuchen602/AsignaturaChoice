import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import style from './Courses.scss';
import {base_grey, styles} from '../../styles';
import {Rating} from 'react-native-ratings';
import {Course} from '../../model/model';
import axios from 'axios';
import {base_url} from '../../constants';

const Courses = ({route, navigation}: any) => {
  const {careerId} = route.params;
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  axios
    .get(`${base_url}course.php?career_id=${careerId}`)
    .then(response => {
      setCourses(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
    });

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
      <ScrollView style={styles.fullSizeBox}>
        {!loading ? (
          courses
            .filter(course =>
              course.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map(course => (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('Reviews', {courseId: course.id})
                }
                key={course.id}
                style={style.card}>
                <Text style={style.cardTitle}>{course.name}</Text>
                <Text style={style.avgScore}>
                  {course.avg ? Number(course.avg).toFixed(1) : ''}
                </Text>
                <Image
                  source={require('../../assets/star.png')}
                  style={style.star}
                />
              </TouchableOpacity>
            ))
        ) : (
          <ActivityIndicator size={'large'} color={base_grey} />
        )}
      </ScrollView>
    </View>
  );
};

export default Courses;
