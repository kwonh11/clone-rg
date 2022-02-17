import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useSelector} from 'react-redux';
import {RootState} from '~/redux/store';
import {CarouselData} from '~/redux/webinar/type';
import {normalize} from '~/utils/responsiveSize';
import WebinarCategory from './WebinarCategory';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface RenderItemProps<T> {
  item: T;
  index: number;
}
function renderItem({item, index}: RenderItemProps<CarouselData>) {
  const limitRate: number =
    item.voluteerCount / item.volunteerLimit >= 1
      ? 100
      : Number((item.voluteerCount / item.volunteerLimit).toFixed(2)) * 100;
  const backgroundStyle = {
    backgroundColor: item.color,
  };
  const progressBarWidthStyle = {width: `${limitRate}%`};
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.content, backgroundStyle]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>UPCOMMING LIVE</Text>
          <View style={styles.headerCircle} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.tagText}>{item.tag}</Text>
        <Text style={styles.dateText}>
          {item.date} ({item.region})
        </Text>
        <View style={styles.tutorWrap}>
          <Image
            source={{uri: item.tutorImage}}
            style={styles.tutorImage}
            resizeMode="contain"
          />
          <View style={styles.tutorInfoWrap}>
            <Text style={styles.tutorNameTextBold}>{item.tutor}</Text>
            <Text style={styles.tutorInfoText}>{item.tutorAffiliation}</Text>
          </View>
        </View>
        <View style={styles.limitGraphWrap}>
          <Text style={styles.limitGraphCountText}>
            현재 신청 {item.voluteerCount} 명
          </Text>
          <View style={styles.limitProgressBar}>
            <View style={[styles.limitProgress, progressBarWidthStyle]} />
          </View>
          <Text style={styles.limitGraphLimitText}>
            전체 정원 {item.volunteerLimit} 명
          </Text>
        </View>
        <View style={styles.goDetailWrap}>
          <TouchableOpacity style={styles.goDetailButton}>
            <Text style={styles.goDetailButtonText}>자세히 보기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function TopSection() {
  const [index, setIndex] = useState<number>(0);
  const list = useSelector<RootState, CarouselData[]>(
    state => state.webinar.carouselList,
  );
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        // ref={carouselRef}
        data={list}
        onSnapToItem={(page: number) => setIndex(page)}
        renderItem={renderItem}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={list.length}
          activeDotIndex={index}
          containerStyle={styles.paginationWrap}
          dotStyle={styles.paginationDot}
          inactiveDotOpacity={0.5}
          inactiveDotScale={0.6}
        />
      </View>
      <WebinarCategory />
    </View>
  );
}
const styles = StyleSheet.create({
  carouselContainer: {},
  content: {
    height: normalize(390),
    paddingHorizontal: normalize(45),
    paddingVertical: normalize(32),
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: normalize(12),
    letterSpacing: -0.36,
    color: 'white',
    marginRight: 5,
  },
  headerCircle: {
    width: normalize(8),
    height: normalize(8),
    backgroundColor: 'red',
    borderRadius: 15,
  },
  title: {
    color: 'white',
    marginTop: normalize(22),
    fontSize: normalize(20),
    fontWeight: '600',
  },
  tagText: {
    color: 'white',
    marginTop: normalize(11),
    fontSize: normalize(12),
  },
  dateText: {
    color: 'white',
    marginTop: normalize(4),
    fontSize: normalize(12),
  },
  tutorWrap: {
    marginTop: normalize(19),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tutorImage: {
    width: 40,
    height: 40,
  },
  tutorInfoWrap: {
    height: 40,
    paddingVertical: 3,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: normalize(20),
  },
  tutorNameTextBold: {
    color: 'white',
    fontSize: normalize(12),
    fontWeight: '600',
  },
  tutorInfoText: {
    color: 'white',
    fontSize: normalize(12),
  },
  limitGraphWrap: {
    marginTop: normalize(28),
    height: normalize(50),
    display: 'flex',
  },
  limitGraphLimitText: {
    color: 'white',
    fontSize: normalize(13),
  },
  limitGraphCountText: {
    color: 'white',
    fontSize: normalize(14),
  },
  limitProgressBar: {
    marginVertical: 5,
    borderRadius: 3,
    height: 5,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  limitProgress: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 3,
    width: '0%',
  },
  goDetailWrap: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  goDetailButton: {
    marginTop: normalize(15),
    width: normalize(170),
    height: normalize(45),
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goDetailButtonText: {
    fontSize: normalize(14),
    color: 'black',
    fontWeight: '600',
  },
  paginationContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationWrap: {
    paddingVertical: 15,
    width: 50,
  },
  paginationDot: {
    width: normalize(10),
    height: normalize(10),
    borderRadius: 15,
  },
});
