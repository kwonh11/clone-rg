import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Navigator from '~/navigator/RootStackNavigator';
import store, {RootState} from '@redux/store';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import {actions} from '~/redux/webinar/state';
import {LanguageType, LANGUAGE_INDEXS} from '~/redux/webinar/type';

const SelectLanguage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const languageType = useSelector(
    (state: RootState) => state.webinar.languageType,
  );
  const onPressLanguageType = (type: LanguageType) => {
    dispatch(actions.setLanguage(type as number));
    navigation.navigate('content');
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrap}>
        <View style={styles.top}>
          <Text>언어선택</Text>
        </View>
        {LANGUAGE_INDEXS.map((_, i) => (
          <TouchableOpacity
            key={`language_type${i}`}
            onPress={() => onPressLanguageType(i)}
            style={styles.button}>
            <Text style={styles.text}>{i}번 언어</Text>
            {languageType === i && (
              <Icons name="checkmark-sharp" style={styles.checkIcon} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonsWrap: {
    backgroundColor: 'white',
  },
  top: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    width: '100%',
    height: 60,
    paddingHorizontal: 16,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {},
  checkIcon: {
    fontSize: 20,
  },
});

export default SelectLanguage;
