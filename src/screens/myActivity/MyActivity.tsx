import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {normalize} from '~/utils/responsiveSize';

export default function Class() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>학습활동 화면입니다.</Text>
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
