import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigator from './BottomNavigator';
import ContentDetail from '@screens/content/ContentDetail';
import ContentClassified from '@screens/content/ContentClassified';

const {Navigator, Screen} = createNativeStackNavigator();
export default function RootStackNavigator() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="root" component={BottomNavigator} />
        <Screen name="contentDetail" component={ContentDetail} />
        <Screen name="contentClassified" component={ContentClassified} />
      </Navigator>
    </NavigationContainer>
  );
}
