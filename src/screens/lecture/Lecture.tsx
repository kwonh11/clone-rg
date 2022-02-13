import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {normalize} from '~/utils/responsiveSize';

export default function Lecture() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>1:1수업 화면입니다.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: normalize(13),
    color: 'rgb(135, 148, 167)',
  },
});
