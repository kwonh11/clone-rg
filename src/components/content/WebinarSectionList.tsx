import React from 'react';
import {
  StatusBar,
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {WebinarCard, WebinarCollection} from '~/redux/webinar/type';
import WebinarCardPortrait from './WebinarCardPortrait';
import {normalize} from '~/utils/responsiveSize';

interface Props {
  index: number;
  item: WebinarCollection;
}
export default function WebinarSectionList(props: Props) {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.name}</Text>
        <Icon name="chevron-right" style={styles.rightIcon} />
      </View>
      <ScrollView
        style={styles.horizontalScrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}>
        <View style={styles.slideWrap}>
          {item.list.map((data: WebinarCard, i: number) => (
            <WebinarCardPortrait
              {...data}
              key={`webinar_section_${item.name}_card_${i}`}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(40),
  },
  header: {
    paddingHorizontal: normalize(16),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: normalize(20),
    fontWeight: '700',
  },
  rightIcon: {
    fontSize: normalize(25),
    color: 'rgb(50,50,50)',
  },
  horizontalScrollView: {
    paddingHorizontal: normalize(16),
  },
  slideWrap: {
    marginTop: normalize(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
