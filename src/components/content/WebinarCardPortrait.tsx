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
        <View style={styles.topSection}>
          <ImageBackground
            source={{uri: thumbnail}}
            style={styles.topImage}
            resizeMode="cover"
            borderTopRightRadius={10}
            borderTopLeftRadius={10}
          />
          <TouchableOpacity style={styles.heartIconWrap} onPress={onPressLike}>
            <Icon
              name="heart-sharp"
              style={
                isLike ? styles.heartIconPositive : styles.heartIconNegative
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.bottomTextWrap}>
            <Text style={styles.tagText}>#{tag}</Text>
            <Text style={styles.titleText}>{title}</Text>
          </View>
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
  last: {
    marginRight: normalize(40),
  },
  container: {
    width: normalize(240),
    height: normalize(366),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(232, 236, 239)',
    marginRight: normalize(20),
    display: 'flex',
  },
  topSection: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'relative',
  },
  topImage: {
    flex: 1,
  },
  heartIconWrap: {
    position: 'absolute',
    top: normalize(15),
    right: normalize(15),
    width: normalize(30),
    height: normalize(30),
    borderRadius: normalize(30),
    backgroundColor: 'rgba(239, 242, 247, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIconPositive: {
    fontSize: normalize(20),
    marginTop: 2,
    color: 'red',
  },
  heartIconNegative: {
    fontSize: normalize(20),
    marginTop: 2,
    color: 'white',
  },
  bottomSection: {
    height: normalize(173),
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(12),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bottomTextWrap: {
    display: 'flex',
  },
  tagText: {
    marginTop: normalize(5),
    fontSize: normalize(11),
    letterSpacing: -0.33,
    color: 'rgb(135, 148, 167)',
  },
  titleText: {
    marginTop: normalize(12),
    fontSize: normalize(15),
    letterSpacing: -0.3,
    color: 'black',
    fontWeight: '600',
    lineHeight: normalize(20),
  },
  tutorWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: normalize(15),
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
