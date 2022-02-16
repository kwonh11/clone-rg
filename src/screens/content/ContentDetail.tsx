import React, {useEffect, useState} from 'react';
import {
  StatusBar,
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
import {callApiGetWebinarDetail} from '~/api/api';
import {WebinarDetail} from '~/redux/webinar/type';
import OverView from '../../components/content/DetailOverView';
import PlayList from '../../components/content/DetailPlayList';
import OtherWebinar from '../../components/content/DetailOtherWebinar';

type ParamList = {
  ContentDetail: {
    id: number;
  };
};
const getTabList = (name: string) => [
  '개요',
  '재생목록',
  `${name}의 다른 웨비나`,
];
export default function ContentDetail() {
  const [detail, setDetail] = useState<WebinarDetail | null>();
  const [isLike, setIsLike] = useState<boolean>(!!detail?.isLike);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'ContentDetail'>>();
  const {id} = route.params;

  const goBack = () => {
    navigation.goBack();
  };
  const getDetail = async (webinarId: number) => {
    const data = await callApiGetWebinarDetail(webinarId);
    if (data) {
      setDetail({...data});
    }
  };
  const toggleIsLike = () => {
    setIsLike(!isLike);
  };

  useEffect(() => {
    if (id >= 0) {
      getDetail(id);
    }
  }, [id]);

  const tabs = getTabList(detail ? detail.tutor : '');
  return detail ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="chevron-thin-left"
          style={styles.backIcon}
          onPress={goBack}
        />
        <View style={styles.headerTextWrap}>
          <Text style={styles.headerText} numberOfLines={1}>
            {detail.title}
          </Text>
        </View>
        <Ionicons
          name={isLike ? 'heart' : 'heart-outline'}
          style={isLike ? styles.heartIconActive : styles.heartIcon}
          onPress={toggleIsLike}
        />
      </View>

      <View style={styles.videoWrap}>
        <VideoPlayer
          video={{uri: detail.videoUrl}}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{
            uri: 'https://play-lh.googleusercontent.com/ORVjzBJn5ZeGam96RXOJP1BdUdtTxEfx4CeS6UvYouP3SaeGBMcy7CyTMB8c6i5v_sfI',
          }}
        />
      </View>

      <View style={styles.tabWrap}>
        {tabs.map((tab, i) => (
          <TouchableOpacity
            style={styles.tab}
            key={`webinar detail_tab_${tab}`}
            onPress={() => setTabIndex(i)}>
            <Text
              style={i === tabIndex ? styles.tabTextActive : styles.tabText}>
              {tab}
            </Text>
            {i === tabIndex && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {tabIndex === 0 && (
          <OverView
            title={detail.title}
            tutor={detail.tutor}
            tutorImage={detail.tutorImage}
            tutorAffiliation={detail.tutorAffiliation}
            context={detail.context}
          />
        )}
        {tabIndex === 1 && <PlayList />}
      </ScrollView>
      {tabIndex === 2 && <OtherWebinar tutorName={detail.tutor} />}
    </View>
  ) : (
    <Loading />
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
  heartIcon: {
    fontSize: normalize(25),
    padding: normalize(5),
    marginRight: normalize(10),
    color: 'black',
  },
  heartIconActive: {
    fontSize: normalize(25),
    padding: normalize(5),
    marginRight: normalize(10),
    color: 'red',
  },
  videoWrap: {
    height: normalize(240),
  },
  tabWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: normalize(57),
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(232, 236, 239)',
    paddingHorizontal: normalize(21),
  },
  tab: {
    marginRight: normalize(25),
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: normalize(15),
    fontWeight: '600',
    color: 'rgb(135, 148, 167)',
  },
  tabTextActive: {
    fontSize: normalize(15),
    fontWeight: '600',
    color: 'rgb(116, 89, 218)',
  },
  activeIndicator: {
    height: 3,
    width: '100%',
    backgroundColor: 'rgb(116, 89, 218)',
    position: 'absolute',
    bottom: 0,
  },
});
