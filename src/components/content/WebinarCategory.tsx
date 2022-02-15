import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Button,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

import {normalize} from '~/utils/responsiveSize';
import {callApiWebinarCategories} from '~/api/api';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default function WebinarCategory() {
  const [categories, setCategories] = useState<string[]>([]);
  const getCategories = async () => {
    const data = await callApiWebinarCategories();
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.title}>카테고리별 웨비나</Text>
      <ScrollView
        style={styles.horizontalScrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}>
        <View style={styles.slideWrap}>
          {categories.map((category, i) => (
            <TouchableOpacity
              style={styles.categoryButton}
              key={`webinar_category_${category}`}>
              <Text style={styles.buttonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    paddingVertical: normalize(15),
  },

  title: {
    marginLeft: normalize(16),
    fontSize: normalize(15),
    letterSpacing: -0.75,
    fontWeight: '600',
  },
  horizontalScrollView: {
    flex: 1,
  },
  slideWrap: {
    marginTop: normalize(13),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: normalize(105),
    width: SCREEN_WIDTH * 1.5,
    paddingHorizontal: normalize(16),
  },
  categoryButton: {
    height: normalize(40),
    paddingHorizontal: 10,
    marginVertical: normalize(5),
    marginRight: normalize(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(233, 237, 240)',
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'rgb(92, 95, 112)',
  },
});
