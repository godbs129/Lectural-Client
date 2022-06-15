import dayjs from 'dayjs';
import { useSetRecoilState } from 'recoil';
import { isLectureModalOpen, lectureModalData } from '../../store/lectureStore';
import { LectureData } from '../../types/Lecture';
import * as S from './Today.style';

const data: LectureData[] = [
  {
    idx: 1,
    title:
      '손민재가 알려주는 신중빈 침대 강탈하는법 궁금하시죠? 저도 궁금해요~',
    content:
      '3학년 짬빠 찰만큼 찬 손민재가 알려주는 친구 침대 뺐는 법 궁금하시죠? 저도 궁금해서 강의하기로 했어요~ 궁금하시면 신청하고 목요일 1시까지 시청각실로 오세요.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    material: '중빈 침대',
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    uniqueId: '3p290u5t0392hgnawlg',
    tags: ['급식', '대소고', '저녁'],
    picture:
      'http://img.etoday.co.kr/pto_db/2021/10/700/20211027111516_1679805_1200_748.jpg',
    user: {
      uniqueId: '866534f5-16b9-48df-91cf-7bdb06e35d53',
      name: '전해윤',
      accessLevel: 1,
      profileImage:
        'http://dodam.b1nd.com/api/image/jpg/DW_IMG_84926080205.jpg',
    },
    place: {
      name: '기숙사 507호',
      type: 1,
    },
  },
  {
    idx: 2,
    title: '손민재가 알려주는 신중빈 침대 강탈하는법',
    content: '3학년 짬빠 찰만큼 찬 손민재가 알려주는 친구 침대 뺐는 법',
    material: '중빈 침대',
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    tags: ['급식', '대소고', '저녁'],
    uniqueId: '3p290u5t0392hgnawlg',
    picture: 'http://dodam.b1nd.com/api/image/png/DW_IMG_5452932532.png',
    user: {
      uniqueId: '3p290u5t0392hgnawlg',
      name: '손민재',
      accessLevel: 1,
      profileImage:
        'http://dodam.b1nd.com/api/image/jpg/DW_IMG_84926080205.jpg',
    },
    place: {
      name: '기숙사 507호',
      type: 1,
    },
  },
  {
    idx: 3,
    title: '손민재가 알려주는 신중빈 침대 강탈하는법',
    content: '3학년 짬빠 찰만큼 찬 손민재가 알려주는 친구 침대 뺐는 법',
    material: '중빈 침대',
    tags: ['급식', '대소고', '저녁'],
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    uniqueId: '3p290u5t0392hgnawlg',
    picture: 'http://dodam.b1nd.com/api/image/png/DW_IMG_5452932532.png',
    user: {
      uniqueId: '3p290u5t0392hgnawlg',
      name: '손민재',
      accessLevel: 1,
      profileImage:
        'http://dodam.b1nd.com/api/image/jpg/DW_IMG_84926080205.jpg',
    },
    place: {
      name: '기숙사 507호',
      type: 1,
    },
  },
  {
    idx: 4,
    title: '손민재가 알려주는 신중빈 침대 강탈하는법',
    content: '3학년 짬빠 찰만큼 찬 손민재가 알려주는 친구 침대 뺐는 법',
    material: '중빈 침대',
    startDate: new Date(),
    endDate: new Date(),
    tags: ['급식', '대소고', '저녁'],
    createdAt: new Date(),
    uniqueId: '3p290u5t0392hgnawlg',
    picture: 'http://dodam.b1nd.com/api/image/png/DW_IMG_5452932532.png',
    user: {
      uniqueId: '3p290u5t0392hgnawlg',
      name: '손민재',
      accessLevel: 1,
      profileImage:
        'http://dodam.b1nd.com/api/image/jpg/DW_IMG_84926080205.jpg',
    },
    place: {
      name: '기숙사 507호',
      type: 1,
    },
  },
];

const Today = (): JSX.Element => {
  const setModalOpen = useSetRecoilState(isLectureModalOpen);
  const setLecture = useSetRecoilState(lectureModalData);

  return (
    <>
      <S.Today>
        <S.TodayTitle>오늘의 특강</S.TodayTitle>
        <S.TodayWrap>
          {data.map((lecture) => {
            return (
              <S.TodayCard
                onClick={() => {
                  setModalOpen(true);
                  setLecture(lecture);
                }}
                key={lecture.idx}
              >
                <S.TodayCardImage src={lecture.picture} />
                <S.TodayCardInfo>
                  <S.TodayCardTitle>{lecture.title}</S.TodayCardTitle>
                  <S.TodayCardContent>{lecture.content}</S.TodayCardContent>
                  <S.TodayCardBottom>
                    <S.TodayCardPlace>{lecture.place.name}</S.TodayCardPlace>
                    <S.TodayCardData>
                      <S.TodayCardTime>
                        {dayjs(lecture.startDate).format('HH:mm')} ~{' '}
                        {dayjs(lecture.endDate).format('HH:mm')}
                      </S.TodayCardTime>
                      <S.TodayCardName>{lecture.user.name}</S.TodayCardName>
                    </S.TodayCardData>
                  </S.TodayCardBottom>
                </S.TodayCardInfo>
              </S.TodayCard>
            );
          })}
        </S.TodayWrap>
      </S.Today>
    </>
  );
};

export default Today;
