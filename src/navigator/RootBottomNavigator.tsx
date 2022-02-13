import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {FunctionComponent, ReactElement, ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import Lecture from '~/screens/lecture/Lecture';
import Home from '~/screens/home/Home';
import MyActivity from '~/screens/myActivity/MyActivity';
import Tutor from '~/screens/tutor/Tutor';
import ContentStack from './stack/ContentStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {normalize} from '~/utils/responsiveSize';

const {Navigator, Screen} = createBottomTabNavigator();
export default function RootBottomNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="content"
        tabBar={props => <BottomTabBar {...props} />}>
        <Screen name="home" options={{tabBarLabel: '홈'}} component={Home} />
        <Screen
          name="lecture"
          options={{tabBarLabel: '1:1수업'}}
          component={Lecture}
        />
        <Screen
          name="tutor"
          options={{tabBarLabel: '튜터'}}
          component={Tutor}
        />
        <Screen
          name="content"
          options={{tabBarLabel: '콘텐츠'}}
          component={ContentStack}
        />
        <Screen
          name="myActivity"
          options={{tabBarLabel: '학습활동'}}
          component={MyActivity}
        />
      </Navigator>
    </NavigationContainer>
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
