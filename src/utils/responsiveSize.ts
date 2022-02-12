import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// iphone 11 기준
const scaleWidth = SCREEN_WIDTH / 414;
const scaleHeight = SCREEN_HEIGHT / 896;

export function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * scaleHeight : size * scaleWidth;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
