import {
  CarouselData,
  Tutor,
  WebinarCard,
  WebinarCollection,
  WebinarDetail,
  WebinarVideo,
} from '~/redux/webinar/type';
import store from '@redux/store';
import {HTMLSource} from 'react-native-render-html';

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
const WEBINAR_CATEGORIES: string[] = [
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
const WEBINAR_CARD_DATA: Omit<WebinarCard, 'id'>[] = [
  {
    isLike: false,
    thumbnail:
      'https://d2dwpq8l35sujt.cloudfront.net/ringlecontents/ac9e00746700e6d7e1bc2b09bd38734caf343c30615fa0f7fca85f400dd0d144/image/ac9e00746700e6d7e1bc2b09bd38734caf343c30615fa0f7fca85f400dd0d144_a661f64d245d.jpg?w=250',
    tag: 'Grammar In Use',
    title: '예술에서의 페미니즘: 올림피아와 그 너머',
    tutor: 'Joseph',
    tutorImage:
      'https://s3-ap-northeast-2.amazonaws.com/ringleimageassets/avatar/ed6d985359cc6f1b21f257b5a90b223c5eea11cceb33fc3ca5304c110d1546ba_a018daf8b653.jpg?w=40',
    tutorAffiliation: 'University of Toronto',
  },
  {
    isLike: false,
    thumbnail:
      'https://d2dwpq8l35sujt.cloudfront.net/ringlecontents/207e0ab5ede0f4b4b45f96f196fd960d9ff457b9c55b567d617ff884670723c6/image/207e0ab5ede0f4b4b45f96f196fd960d9ff457b9c55b567d617ff884670723c6_0abf499aaa53.png?w=250',
    tag: 'Ringle Class',
    title: '사랑이란 무엇일까요?',
    tutor: 'JACKIE',
    tutorImage:
      'https://s3-ap-northeast-2.amazonaws.com/ringleimageassets/avatar/6f062ba74db6_bbd05d342f55.jpg',
    tutorAffiliation: 'Yale University',
  },
  {
    isLike: false,
    thumbnail:
      'https://d2dwpq8l35sujt.cloudfront.net/ringlecontents/207e0ab5ede0f4b4b45f96f196fd960d9ff457b9c55b567d617ff884670723c6/image/207e0ab5ede0f4b4b45f96f196fd960d9ff457b9c55b567d617ff884670723c6_2199a1b06dbe.png?w=250',
    tag: 'Ringle Class',
    title: '웰컴 위크 (Day 4): 영어로 생각하기',
    tutor: 'Ringle',
    tutorImage:
      'https://d38emex6h5e12i.cloudfront.net/avatar/96924636778e07f979fcbc8b8faf1cc84c494f0a39b2c36ad4209e15d7bbd1d8_015b8cf96e09.png?w=40',
    tutorAffiliation: 'Ringle Team',
  },
];
const WEBINAR_CARD_CATEGORIES: string[] = [
  '추천 웨비나',
  '인기 웨비나',
  '링글 Radio영상',
  '링글 LIVE영상',
  '비즈니스/커리어',
  '실생활 영어',
  '영어와 공부',
  '트렌드/문화',
  '영어권 스쿨라이프',
];
const WEBINAR_VIDEO_DATA: WebinarVideo[] = [
  {
    videoName: 'What language tests have you taken? How was your experience?',
    runningTime: '0:45',
    videoUrl:
      'https://s3.ap-northeast-2.amazonaws.com/recording-video-asia/app/coconut/video_78299_480.mp4',
  },
  {
    videoName:
      'What are the pros and cons of language tests? What alternatives are there?',
    runningTime: '1:08',
    videoUrl:
      'https://s3.ap-northeast-2.amazonaws.com/recording-video-asia/app/coconut/video_78299_480.mp4',
  },
  {
    videoName:
      'Are the knowledges gained from studying the tests useful for language learning?',
    runningTime: '0:51',
    videoUrl:
      'https://s3.ap-northeast-2.amazonaws.com/recording-video-asia/www/coconut/video_55812_480.mp4',
  },
];

export function callApiCarouselData(): Promise<CarouselData[]> {
  return Promise.resolve([...CAROUSEL_DATA]);
}
export function callApiWebinarCategories(): Promise<string[]> {
  return Promise.resolve([...WEBINAR_CATEGORIES]);
}
export function callApiWebinarCardCollectionList(): Promise<
  WebinarCollection[]
> {
  const WebinarCollectionList: WebinarCollection[] =
    WEBINAR_CARD_CATEGORIES.map((category, i) => {
      const getRandomWebinarArray = gernerateRandomWebinarArray(10, i * 10);
      return {
        name: category,
        list: getRandomWebinarArray(),
      };
    });
  return Promise.resolve(WebinarCollectionList);
}
function gernerateRandomWebinarArray(count: number, lastId = 0) {
  return function getRandomWebinarArray(): WebinarCard[] {
    let arr = [];
    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * 3);
      const id: number = lastId + arr.length;
      arr.push({
        id: id,
        ...WEBINAR_CARD_DATA[index],
      });
    }
    return arr;
  };
}

export function callApiGetWebinarDetail(
  id: number,
): Promise<WebinarDetail | null> {
  const {
    webinar: {webinarCollectionList},
  } = store.getState();
  const list = webinarCollectionList.map(collection => collection.list).flat();
  const found = list.find(webinar => webinar.id === id);
  const randomIndex = Math.floor(Math.random() * 3);
  const context = {
    html: `<h3>Hello World</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h4>1. What is love</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
  };
  return found
    ? Promise.resolve({
        ...found,
        ...WEBINAR_VIDEO_DATA[randomIndex],
        context,
      })
    : Promise.resolve(null);
}

export function callApiGetOtherWebinar(
  tutorName: string,
): Promise<WebinarCard[]> {
  const {
    webinar: {webinarCollectionList},
  } = store.getState();
  const list = webinarCollectionList.map(collection => collection.list).flat();
  const otherWebinars: WebinarCard[] = list.filter(
    webinar => webinar.tutor === tutorName,
  );
  return Promise.resolve(otherWebinars);
}

export function callApiWebinarVideoArray(): Promise<WebinarVideo[]> {
  return Promise.resolve(getRandomWebinarVideoArray());
}
function getRandomWebinarVideoArray(): WebinarVideo[] {
  const length = Math.floor(Math.random() * 5) + 5;
  let arr = [];
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * 3);
    arr.push(WEBINAR_VIDEO_DATA[index]);
  }
  return arr;
}

export function callApiGetWebinarListByTag(
  tagName: string,
): Promise<WebinarCard[] | []> {
  const {
    webinar: {webinarCollectionList},
  } = store.getState();
  const list = webinarCollectionList.find(
    collection => collection.name === tagName,
  )?.list;
  return list ? Promise.resolve([...list]) : Promise.resolve([]);
}
