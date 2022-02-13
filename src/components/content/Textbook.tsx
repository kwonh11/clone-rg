import React from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {normalize} from '@utils/responsiveSize';

const FULL_WIDTH = Dimensions.get('window').width;
export default function TextBook() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>교재 화면입니다.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: FULL_WIDTH,
  },
  text: {
    fontSize: normalize(13),
    color: 'rgb(135, 148, 167)',
  },
});
