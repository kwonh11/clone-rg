import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  PanResponder,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DailyBrief from '~/components/content/DailyBrief';
import MyContent from '~/components/content/MyContent';
import TextBook from '~/components/content/Textbook';
import Webinar from '~/components/content/Webinar';
import {normalize} from '~/utils/responsiveSize';

const MENULIST: string[] = ['웨비나', '교재', '데일리브리프', '내콘텐츠'];
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Content() {
  const [tabIndex, setTabIndex] = useState<keyof typeof MENULIST>(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const onScrollHorizontal = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!e?.nativeEvent) {
      return;
    }
    const {
      contentOffset: {x},
    } = e.nativeEvent;
    const currentIndex = Math.round(x / SCREEN_WIDTH);
    setTabIndex(currentIndex);
  };

  const onPressTopMenu = (index: number) => {
    setTabIndex(index);
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: Number(tabIndex) * SCREEN_WIDTH,
        y: 0,
        animated: true,
      });
    }
  }, [tabIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.topMenuWrap}>
        <View style={styles.topMenuLeftWrap}>
          {MENULIST.map((name, i) => (
            <TouchableOpacity
              style={styles.menuTextButton}
              onPress={() => onPressTopMenu(i)}
              key={`webinar_top_menu_${name}`}>
              <Text
                style={
                  tabIndex === i ? styles.menuTextActive : styles.menuText
                }>
                {name}
              </Text>
              {tabIndex === i && <View style={styles.menuUnderline} />}
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.topMenuRightWrap}>
          <Ionicons name="search-outline" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        disableIntervalMomentum={true}
        style={styles.swipableContentWrap}
        onMomentumScrollEnd={onScrollHorizontal}
        // 안드로이드 이슈: https://github.com/meliorence/react-native-snap-carousel/blob/master/doc/KNOWN_ISSUES.md#flatlist-and-scrollviews-limitations
        scrollEnabled={!(tabIndex === 0 && Platform.OS === 'android')}>
        <Webinar />
        <TextBook />
        <DailyBrief />
        <MyContent />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topMenuWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
    backgroundColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 6,
    borderBottomColor: 'rgb(232, 236, 239)',
  },
  topMenuLeftWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  topMenuRightWrap: {
    width: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: normalize(10),
  },
  menuTextButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(11),
    marginHorizontal: normalize(11),
    position: 'relative',
  },
  menuUnderline: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: -7.5,
  },
  menuText: {
    fontSize: normalize(15),
    color: 'rgb(135, 148, 167)',
  },
  menuTextActive: {
    fontSize: normalize(15),
    color: 'black',
  },
  searchIcon: {
    padding: normalize(5),
    fontSize: normalize(18),
  },
  swipableContentWrap: {
    flex: 1,
  },
});
