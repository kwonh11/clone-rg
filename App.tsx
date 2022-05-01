import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import Navigator from '~/navigator/RootStackNavigator';
import store from '@redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.flex}>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </SafeAreaView>
    </Provider>
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
