import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navigator from '~/navigator/RootBottomNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
});

export default App;
