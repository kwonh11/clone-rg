import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Content from '~/screens/content/Content';
import Home from '~/screens/home/Home';
import Lecture from '~/screens/lecture/Lecture';
import MyActivity from '~/screens/myActivity/MyActivity';
import Tutor from '~/screens/tutor/Tutor';
import {normalize} from '~/utils/responsiveSize';
import {s_common, useLocale} from '~/wording';

const {Navigator, Screen} = createBottomTabNavigator();
export default function BottomNavigator() {
  const {t} = useLocale();

  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="content"
      tabBar={props => <BottomTabBar {...props} />}>
      <Screen
        name="home"
        options={{tabBarLabel: t(s_common.home)}}
        component={Home}
      />
      <Screen
        name="lecture"
        options={{tabBarLabel: t(s_common.lesson_1_1)}}
        component={Lecture}
      />
      <Screen
        name="tutor"
        options={{tabBarLabel: t(s_common.tutor)}}
        component={Tutor}
      />
      <Screen
        name="content"
        options={{tabBarLabel: t(s_common.original)}}
        component={Content}
      />
      <Screen
        name="myActivity"
        options={{tabBarLabel: t(s_common.log)}}
        component={MyActivity}
      />
    </Navigator>
  );
}

interface TabBarIconProps {
  isFocused: boolean;
  name: string;
}
function TabBarIcon({isFocused, name}: TabBarIconProps): ReactElement {
  switch (name) {
    case 'home':
      return (
        <Ionicons
          name="home-outline"
          style={isFocused ? styles.iconActive : styles.icon}
        />
      );
    case 'lecture':
      return (
        <FeatherIcons
          name="monitor"
          style={isFocused ? styles.iconActive : styles.icon}
        />
      );
    case 'tutor':
      return (
        <FontAwesomeIcons
          name="chalkboard-teacher"
          style={isFocused ? styles.iconActive : styles.icon}
        />
      );
    case 'content':
      return (
        <Ionicons
          name="book"
          style={isFocused ? styles.iconActive : styles.icon}
        />
      );
    case 'myActivity':
      return (
        <Ionicons
          name="timer"
          style={isFocused ? styles.iconActive : styles.icon}
        />
      );
    default:
      return <></>;
  }
}
function BottomTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View style={styles.tabBarWrap}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || options.title;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, params: {}, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            key={`bottom_tabs_${route.name}`}
            style={styles.tab}>
            <TabBarIcon name={route.name} isFocused={isFocused} />
            <Text style={isFocused ? styles.textActive : styles.text}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarWrap: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgb(232, 236,239)',
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    height: normalize(60),
    paddingTop: normalize(12),
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: normalize(20),
    color: 'rgb(135, 148, 167)',
  },
  iconActive: {
    fontSize: normalize(20),
    color: 'rgb(116, 89, 218)',
  },
  text: {
    marginTop: 5,
    color: 'rgb(135, 148, 167)',
  },
  textActive: {
    marginTop: 5,
    color: 'rgb(116, 89, 218)',
  },
});
