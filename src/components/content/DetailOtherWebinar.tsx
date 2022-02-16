import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {normalize} from '@utils/responsiveSize';
import {callApiGetOtherWebinar} from '@api/api';
import {WebinarCard} from '~/redux/webinar/type';
import WebinarCardLandscape from './WebinarCardLandscape';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  tutorName: string;
}
export default function OtherWebinar({tutorName}: Props) {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [list, setList] = useState<WebinarCard[]>([]);
  const getList = async (name: string) => {
    if (name) {
      const data = await callApiGetOtherWebinar(name);
      setList(data);
    }
  };
  const navigateDetail = (id: number) => {
    navigation.push('contentDetail', {id});
  };
  useEffect(() => {
    getList(tutorName);
  }, []);
  return (
    <View style={styles.container}>
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
  container: {},
  text: {
    fontSize: normalize(13),
    color: 'rgb(135, 148, 167)',
  },
});
