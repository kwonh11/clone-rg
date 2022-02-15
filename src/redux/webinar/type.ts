import {ColorValue, Image} from 'react-native';

export interface CarouselData {
  title: string;
  tag: string;
  date: string;
  region: string;
  tutor: string;
  tutorImage: string;
  tutorAffiliation: string;
  voluteerCount: number;
  volunteerLimit: number;
  color: ColorValue;
}
export interface WebinarState {
  carouselList: CarouselData[];
  webinarCollectionList: WebinarCollection[];
}
export interface WebinarCard {
  id: number;
  isLike: boolean;
  thumbnail: string;
  tag: string;
  title: string;
  tutor: string;
  tutorImage: string;
  tutorAffiliation: string;
}
export interface Action<T> {
  type: string;
  payload: T;
}
export interface WebinarCollection {
  name: string;
  list: WebinarCard[];
}
