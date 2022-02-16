import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {WebinarCard, WebinarCollection} from '~/redux/webinar/type';
import {normalize} from '~/utils/responsiveSize';
import WebinarCardPortrait from './WebinarCardPortrait';
import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

const TAGS = {
  '추천 웨비나': ['New Webinars'],
  '인기 웨비나': ['Popular'],
  '링글 Radio 영상': ['Ringle Radio'],
  '링글 LIVE영상': ['전체', 'Ringle LIVE', 'Culturecast', "Let's Talk"],
  '비즈니스/커리어': [
    '전체',
    'Biz&Econ',
    'Email',
    'Resume',
    'Interview',
    'Work & Life',
  ],
  '실생활 영어': ['전체', 'Idioms', 'Ringle Bite', 'Expressions'],
  '영어와 공부': [
    '전체',
    'Study Tips',
    'Writing',
    'Email',
    'Paraphrasing',
    'Grammar',
  ],
  '트렌드/문화': [
    '전체',
    'Current News/Society',
    'Culture/Sports/entertainment',
  ],
  '영어권 스쿨라이프': ['전체', 'US Schools', 'UK Schools', 'Other Schools'],
};
const getTags = (tagName: string): string[] => {
  return TAGS[tagName];
};
interface Props {
  index: number;
  item: WebinarCollection;
  isLast: boolean;
}
export default function WebinarSectionList(props: Props) {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {item, isLast} = props;

  const navigateDetail = (id: number) => {
    navigation.navigate('contentDetail', {id});
  };
  const navigateWebinarClassified = () => {
    const params = {
      tagName: item.name,
      tags: getTags(item.name) || [],
    };
    navigation.navigate('contentClassified', params);
  };
  return (
    <View style={isLast ? styles.containerLast : styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.name}</Text>
        <TouchableWithoutFeedback onPress={navigateWebinarClassified}>
          <Icon name="chevron-right" style={styles.rightIcon} />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView
        style={styles.horizontalScrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.slideWrap}>
          {item.list.map((data: WebinarCard, i: number) => (
            <WebinarCardPortrait
              {...data}
              navigateDetail={navigateDetail}
              isLast={i === item.list.length - 1}
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
  containerLast: {
    marginBottom: normalize(80),
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
    fontSize: normalize(30),
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
