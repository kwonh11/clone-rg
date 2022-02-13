import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  StatusBar,
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useRef} from 'react';
import {normalize} from '~/utils/responsiveSize';

const SCREEN_WIDTH = Dimensions.get('window').width;
const TESTDATA = [
  {
    title: 'title',
  },
  {
    title: 'title',
  },
  {
    title: 'title',
  },
];

interface Item {
  title: string;
}
interface RenderItemProps<T> {
  item: T;
  index: number;
}
function renderItem({item, index}: RenderItemProps<Item>) {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
}
interface Props {}
export default function TopSectionCarousel() {
  const carouselRef = useRef<Carousel<any>>(null);
  return (
    <Carousel
      ref={carouselRef}
      data={TESTDATA}
      renderItem={renderItem}
      sliderWidth={SCREEN_WIDTH}
      itemWidth={SCREEN_WIDTH}
    />
  );
}
const styles = StyleSheet.create({
  content: {
    height: normalize(400),
    backgroundColor: 'red',
  },
  text: {
    fontSize: normalize(15),
  },
});
