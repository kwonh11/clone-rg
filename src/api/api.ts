import {CarouselData} from '~/redux/webinar/type';

const CAROUSEL_DATA: CarouselData[] = [
  {
    title: '웰컴 위크 (Day 3): MBA Talk',
    tag: 'Business/Career',
    date: '2월 16일(수) 저녁 19:30',
    region: 'Asia/Seoul',
    tutor: 'Ringle Team',
    tutorImage:
      'https://d38emex6h5e12i.cloudfront.net/avatar/96924636778e07f979fcbc8b8faf1cc84c494f0a39b2c36ad4209e15d7bbd1d8_015b8cf96e09.png?w=40',
    tutorAffiliation: 'Ringle',
    volunteerLimit: 500,
    voluteerCount: 81,
    color: 'skyblue',
  },
  {
    title: '웰컴 위크 (Day 4): 영어 학습법(2)',
    tag: 'Ringle Class',
    date: '2월 16일(수) 저녁 19:30',
    region: 'Asia/Seoul',
    tutor: 'Ringle Team',
    tutorImage:
      'https://d38emex6h5e12i.cloudfront.net/avatar/96924636778e07f979fcbc8b8faf1cc84c494f0a39b2c36ad4209e15d7bbd1d8_015b8cf96e09.png?w=40',
    tutorAffiliation: 'Ringle',
    volunteerLimit: 200,
    voluteerCount: 170,
    color: 'rgb(20,20,20)',
  },
  {
    title: '웰컴 위크 (Day 3): MBA Talk',
    tag: 'Business/Career',
    date: '2월 16일(수) 저녁 19:30',
    region: 'Asia/Seoul',
    tutor: 'Ringle Team',
    tutorImage:
      'https://d38emex6h5e12i.cloudfront.net/avatar/96924636778e07f979fcbc8b8faf1cc84c494f0a39b2c36ad4209e15d7bbd1d8_015b8cf96e09.png?w=40',
    tutorAffiliation: 'Ringle',
    volunteerLimit: 300,
    voluteerCount: 81,
    color: 'skyblue',
  },
];
const WEBINAR_CATEGORIES = [
  '인기 웨비나',
  '링글 Radio 영상',
  '링글 LIVE영상',
  '비즈니스/커리어',
  '실생활 영어',
  '영어와 공부',
  '트렌드/문화',
  '영어권 스쿨라이프',
  '찜한 웨비나',
];

export function callApiCarouselData(): Promise<CarouselData[]> {
  return Promise.resolve([...CAROUSEL_DATA]);
}
export function callApiWebinarCategories(): Promise<string[]> {
  return Promise.resolve([...WEBINAR_CATEGORIES]);
}
