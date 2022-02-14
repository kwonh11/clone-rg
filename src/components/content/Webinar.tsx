import {normalize} from '@utils/responsiveSize';
import React, {useEffect} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {actions} from '~/redux/webinar/state';
import TopSectionCarousel from '../common/TopSectionCarousel';

const FULL_WIDTH = Dimensions.get('window').width;

export default function Webinar() {
  const dispatch = useDispatch();
  const fetchList = async () => {
    dispatch(actions.requestCarouselData());
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList ListHeaderComponent={TopSectionCarousel} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: FULL_WIDTH,
  },
  text: {
    fontSize: normalize(13),
    color: 'rgb(135, 148, 167)',
  },
});
