import React, {ReactElement, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {normalize} from '@utils/responsiveSize';
import RenderHTML, {HTMLSource} from 'react-native-render-html';
import {Tutor} from '~/redux/webinar/type';

interface Props extends Tutor {
  title: string;
  context: HTMLSource;
}
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function DetailOverView(props: Props) {
  const {title, tutor, tutorAffiliation, context, tutorImage} = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <Text style={styles.title}>{title}</Text>
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

      <View style={styles.contextWrap}>
        <RenderHTML source={context} contentWidth={SCREEN_WIDTH} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(247, 248, 250)',
  },
  headerWrap: {
    backgroundColor: 'white',
    height: normalize(145),
    width: '100%',
    display: 'flex',
    padding: normalize(20),
  },
  title: {
    fontSize: normalize(20),
    fontWeight: '600',
  },
  tutorWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: normalize(15),
    marginTop: normalize(21),
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
  contextWrap: {
    marginTop: normalize(7),
    backgroundColor: 'white',
    padding: normalize(20),
    width: '100%',
    flexWrap: 'wrap',
  },
});
