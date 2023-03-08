import React, {useState} from 'react';
import {View, TextInput, ScrollView, Text} from 'react-native';
import style from './Course.scss';
import {styles} from '../../styles';
import {AirbnbRating, Rating} from 'react-native-ratings';

const Course = () => {
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState([
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
        {courses
          .filter(course => course.toLowerCase().includes(search.toLowerCase()))
          .map(course => (
            <View key={course} style={style.card}>
              <Text style={style.cardTitle}>{course}</Text>
              <Rating
                showRating={false}
                imageSize={20}
                style={{paddingVertical: 10}}
              />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Course;
