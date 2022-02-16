import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {WebinarCard} from '~/redux/webinar/type';
import {normalize} from '~/utils/responsiveSize';

interface Props extends WebinarCard {
  isLast: boolean;
  navigateDetail: (id: number) => void;
}

export default function WebinarCardPortrait({
  isLast,
  isLike: isLikeProps,
  tutorImage,
  thumbnail,
  tag,
  title,
  tutor,
  id,
  navigateDetail,
  tutorAffiliation,
}: Props) {
  const [isLike, setIsLike] = useState<boolean>(isLikeProps);

  const onPressCard = () => {
    navigateDetail(id);
  };
  const onPressLike = () => {
    setIsLike(!isLike);
  };
  return (
    <TouchableWithoutFeedback onPress={onPressCard}>
      <View style={[styles.container, isLast && styles.last]}>
        <View style={styles.leftWrap}>
          <Image
            source={{uri: thumbnail}}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.rightWrap}>
          <View style={styles.rightTopWrap}>
            <Text style={styles.tagText}>#{tag}</Text>
            <TouchableOpacity
              style={styles.heartIconWrap}
              onPress={onPressLike}>
              <Icon
                name={isLike ? 'heart-sharp' : 'heart-outline'}
                style={
                  isLike ? styles.heartIconPositive : styles.heartIconNegative
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.tutorWrap}>
            <Image
              source={{uri: tutorImage}}
              style={styles.tutorImage}
              resizeMode="cover"
            />
            <View style={styles.tutorInfoWrap}>
              <Text style={styles.tutorNameTextBold}>{tutor}</Text>
              <Text style={styles.tutorInfoText}>{tutorAffiliation}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(16),
    borderWidth: 1,
    borderColor: 'rgb(232, 236, 239)',
    marginTop: normalize(18),
    borderRadius: 10,
    height: normalize(145),
    display: 'flex',
    flexDirection: 'row',
  },
  last: {
    marginBottom: 100,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  leftWrap: {
    width: normalize(145),
  },
  rightWrap: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 10,
    flex: 1,
  },
  rightTopWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: normalize(28),
  },
  tagText: {
    fontSize: normalize(11),
    letterSpacing: -0.22,
    color: 'rgb(133, 147, 174)',
  },
  heartIconWrap: {
    width: normalize(28),
    height: normalize(28),
    borderRadius: normalize(30),
    backgroundColor: 'rgb(240, 240, 240)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIconPositive: {
    fontSize: normalize(20),
    color: 'red',
  },
  heartIconNegative: {
    fontSize: normalize(20),
    color: 'rgb(160,160,160)',
  },
  titleText: {
    fontSize: normalize(15),
    fontWeight: '500',
    marginLeft: 2,
    letterSpacing: -0.6,
    color: 'rgb(112, 112, 112)',
  },
  tutorWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flex: 1,
  },
  tutorImage: {
    borderRadius: 40,
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
    fontSize: normalize(13),
    fontWeight: '600',
  },
  tutorInfoText: {
    fontSize: normalize(13),
    color: 'rgb(152, 161, 176)',
  },
});
