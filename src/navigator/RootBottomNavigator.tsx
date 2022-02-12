import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';

import Class from '~/screens/class/Class';
import Content from '~/screens/content/Content';
import Home from '~/screens/home/Home';
import MyActivity from '~/screens/myActivity/MyActivity';
import Tutor from '~/screens/tutor/Tutor';
import ContentStack from './stack/ContentStack';
import Icon from 'react-native-vector-icons/Ionicons';

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}
const TAB_CONFIG = [
  {
    name: 'home',
    options: {
      tabBarLabel: '홈',
      tabBarIcon: ({focused, color}: TabBarIconProps) => {},
    },
    components: Home,
  },
];
const {Navigator, Screen} = createBottomTabNavigator();
export default function RootBottomNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="content">
        <Screen name="home" component={Home} />
        <Screen name="class" component={Class} />
        <Screen name="tutor" component={Tutor} />
        <Screen name="content" component={ContentStack} />
        <Screen name="myActivity" component={MyActivity} />
      </Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
