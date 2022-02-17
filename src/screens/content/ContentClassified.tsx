import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  FlatList,
  Button,
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {normalize} from '~/utils/responsiveSize';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-video-player';
import Loading from '../../components/common/Loading';
import {callApiGetWebinarDetail, callApiGetWebinarListByTag} from '~/api/api';
import {WebinarCard, WebinarDetail} from '~/redux/webinar/type';
import OverView from '../../components/content/DetailOverView';
import PlayList from '../../components/content/DetailPlayList';
import OtherWebinar from '../../components/content/DetailOtherWebinar';
import WebinarCardLandscape from '../../components/content/WebinarCardLandscape';

type ParamList = {
  ContentClassified: {
    tagName: string;
    tags: string[];
  };
};
export default function ContentClassified() {
  const route = useRoute<RouteProp<ParamList, 'ContentClassified'>>();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [selectedTag, setSelectedTag] = useState<number>(0);
  const [list, setList] = useState<WebinarCard[] | []>([]);
  const {tags, tagName} = route.params;
  const goBack = () => {
    navigation.goBack();
  };
  const navigateDetail = (id: number) => {
    navigation.push('contentDetail', {id});
  };

  const getList = async (tagNameParam: string) => {
    try {
      const data = await callApiGetWebinarListByTag(tagNameParam);
      setList(data);
    } catch (err) {}
  };
  useEffect(() => {
    getList(tagName);
  }, [tagName, selectedTag]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="chevron-thin-left"
          style={styles.backIcon}
          onPress={goBack}
        />
        <View style={styles.headerTextWrap}>
          <Text style={styles.headerText} numberOfLines={1}>
            {tagName}
          </Text>
        </View>
        <Ionicons name="search-outline" style={styles.searchIcon} />
      </View>

      <ScrollView
        style={styles.horizontalScrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}>
        <View style={styles.slideWrap}>
          {tags.map((tag, i) => (
            <TouchableOpacity
              style={selectedTag === i ? styles.tagActive : styles.tag}
              key={`tag_${tag}`}
              onPress={() => setSelectedTag(i)}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <FlatList
        data={list}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item, i) => `others_webinar_${item.id}_${i}`}
        renderItem={props => (
          <WebinarCardLandscape
            {...props.item}
            navigateDetail={() => navigateDetail(props.item.id)}
            isLast={props.index === list.length - 1}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
  },
  header: {
    height: normalize(52),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
  },
  headerLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: normalize(18),
    padding: normalize(5),
    marginLeft: normalize(11),
    color: 'rgb(100,100,100)',
  },
  headerTextWrap: {
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: normalize(18),
    fontWeight: '500',
    color: 'black',
  },
  searchIcon: {
    fontSize: normalize(18),
    marginRight: normalize(16),
  },
  horizontalScrollView: {
    paddingBottom: 10,
  },
  slideWrap: {
    marginTop: normalize(13),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    flexWrap: 'nowrap',
    height: normalize(50),
    paddingBottom: 10,
    paddingHorizontal: normalize(16),
  },
  tag: {
    height: normalize(35),
    paddingHorizontal: normalize(13),
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'rgb(116, 89, 218)',
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  tagActive: {
    height: normalize(35),
    paddingHorizontal: normalize(13),
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(116, 89, 218,0.15)',
    borderColor: 'rgb(116, 89, 218)',
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  tagText: {
    fontWeight: '500',
    color: 'rgb(116, 89, 218)',
  },
});
