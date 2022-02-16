import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {normalize} from '@utils/responsiveSize';
import {callApiWebinarVideoArray} from '@api/api';
import {WebinarVideo} from '~/redux/webinar/type';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function DetailPlayList() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [list, setList] = useState<WebinarVideo[]>([]);
  const getPlayList = async () => {
    const data = await callApiWebinarVideoArray();
    setList(data);
  };

  useEffect(() => {
    getPlayList();
  }, []);

  return (
    <View style={styles.container}>
      {list.map((video, i) => {
        const isPlaying = i === selectedIndex;
        return (
          <TouchableOpacity
            style={isPlaying ? styles.videoWrapActive : styles.videoWrap}
            key={`detail_playlist_${video.videoUrl}${i}`}
            onPress={() => setSelectedIndex(i)}>
            <Text style={isPlaying ? styles.titleTextActive : styles.titleText}>
              {i > 0 && `Q${i}. `}
              {video.videoName}
            </Text>
            <View style={styles.videoFooter}>
              <EvilIcons name="play" style={styles.playIcon} />
              <Text style={styles.playTimeText}>{video.runningTime}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: normalize(30),
  },
  videoWrapActive: {
    height: normalize(83),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(15),
    backgroundColor: 'rgb(238, 241, 246)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
  videoWrap: {
    height: normalize(83),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(15),
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
  titleTextActive: {
    fontSize: normalize(14),
    color: 'rgb(116, 89, 218)',
  },
  titleText: {
    fontSize: normalize(14),
    color: 'rgb(50,50,50)',
  },
  videoFooter: {
    marginTop: normalize(8),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  playIcon: {
    color: 'rgb(130,130,130)',
    fontSize: normalize(20),
  },
  playTimeText: {
    marginLeft: normalize(8),
    color: 'rgb(130,130,130)',
    fontSize: normalize(12),
  },
});
