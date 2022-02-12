import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Content from '~/screens/content/Content';

const {Navigator, Screen} = createNativeStackNavigator();
export default function ContentStackNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="main" component={Content} />
    </Navigator>
  );
}
const styles = StyleSheet.create({});
