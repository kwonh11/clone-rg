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
  list: CarouselData[];
}
export interface Action<T> {
  type: string;
  payload: T;
}
