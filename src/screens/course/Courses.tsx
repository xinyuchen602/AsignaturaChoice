import React, {useEffect, useState} from 'react';
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
import {Course} from '../../model/model';
import api from '../../api/api';
import {DefaultBanner} from '../../components/DefaultBanner';

const Courses = ({route, navigation}: any) => {
  const {careerId} = route.params;
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`course.php?career_id=${careerId}`)
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(() => {});
  }, [careerId]);

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
                  navigation.push('Reviews', {
                    courseId: course.id,
                    name: course.name,
                  })
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
      <DefaultBanner />
    </View>
  );
};

export default Courses;
