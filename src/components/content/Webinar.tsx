import {normalize} from '@utils/responsiveSize';
import React, {useEffect} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~/redux/store';
import {actions} from '~/redux/webinar/state';
import {WebinarCollection} from '~/redux/webinar/type';
import {useLocale} from '~/wording';
import TopSection from './TopSection';
import WebinarSectionList from './WebinarSectionList';

const FULL_WIDTH = Dimensions.get('window').width;

export default function Webinar() {
  const dispatch = useDispatch();
  const {t} = useLocale();

  const webinarSectionList = useSelector<RootState, WebinarCollection[]>(
    state => state.webinar.webinarCollectionList,
  );
  useEffect(() => {
    dispatch(actions.requestWebinarHomeData());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={TopSection}
        showsVerticalScrollIndicator={false}
        data={webinarSectionList}
        onResponderEnd={e => e.stopPropagation()}
        renderItem={props => (
          <WebinarSectionList
            {...props}
            isLast={webinarSectionList.length === props.index + 1}
          />
        )}
      />
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
