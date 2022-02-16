import {ColorValue} from 'react-native';
import {HTMLSource} from 'react-native-render-html';

export interface Tutor {
  tutor: string;
  tutorImage: string;
  tutorAffiliation: string;
}
export interface CarouselData extends Tutor {
  title: string;
  tag: string;
  date: string;
  region: string;
  voluteerCount: number;
  volunteerLimit: number;
  color: ColorValue;
}
export interface WebinarState {
  carouselList: CarouselData[];
  webinarCollectionList: WebinarCollection[];
}
export interface WebinarCard extends Tutor {
  id: number;
  isLike: boolean;
  thumbnail: string;
  tag: string;
  title: string;
}
export interface Action<T> {
  type: string;
  payload: T;
}
export interface WebinarCollection {
  name: string;
  list: WebinarCard[];
}
export interface WebinarVideo {
  videoName: string;
  runningTime: string;
  videoUrl: string;
}
export interface WebinarDetail extends WebinarCard, WebinarVideo {
  context: HTMLSource;
}
