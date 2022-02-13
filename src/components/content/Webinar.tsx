import React from 'react';
import {Dimensions, StyleSheet, FlatList, Text, View} from 'react-native';
import {normalize} from '@utils/responsiveSize';

import TopSectionCarousel from '../common/TopSectionCarousel';

const FULL_WIDTH = Dimensions.get('window').width;

export default function Webinar() {
  return (
    <View style={styles.container}>
      <FlatList ListHeaderComponent={TopSectionCarousel} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: FULL_WIDTH,
  },
  text: {
    fontSize: normalize(13),
    color: 'rgb(135, 148, 167)',
  },
});
