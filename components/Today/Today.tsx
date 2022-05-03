import dayjs from 'dayjs';
import * as S from './Today.style';

const data = [
  {
    idx: 1,
    title:
      '손민재가 알려주는 신중빈 침대 강탈하는법 궁금하시죠? 저도 궁금해요~',
    content:
      '3학년 짬빠 처먹을 만큼 처먹은 손민재가 알려주는 친구 침대 뺐는 법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법법',
    material: '중빈 침대',
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    uniqueId: '3p290u5t0392hgnawlg',
    picture:
      'https://file.mk.co.kr/meet/neds/2022/02/image_readtop_2022_159363_16452216614947404.jpg',
    user: {
      uniqueId: '3p290u5t0392hgnawlg',
      name: '손민재',
      accessLevel: 1,
      proifleImage:
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
    content:
      '3학년 짬빠 처먹을 만큼 처먹은 손민재가 알려주는 친구 침대 뺐는 법',
    material: '중빈 침대',
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    uniqueId: '3p290u5t0392hgnawlg',
    picture: 'http://dodam.b1nd.com/api/image/png/DW_IMG_5452932532.png',
    user: {
      uniqueId: '3p290u5t0392hgnawlg',
      name: '손민재',
      accessLevel: 1,
      proifleImage:
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
    content:
      '3학년 짬빠 처먹을 만큼 처먹은 손민재가 알려주는 친구 침대 뺐는 법',
    material: '중빈 침대',
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    uniqueId: '3p290u5t0392hgnawlg',
    picture: 'http://dodam.b1nd.com/api/image/png/DW_IMG_5452932532.png',
    user: {
      uniqueId: '3p290u5t0392hgnawlg',
      name: '손민재',
      accessLevel: 1,
      proifleImage:
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
    content:
      '3학년 짬빠 처먹을 만큼 처먹은 손민재가 알려주는 친구 침대 뺐는 법',
    material: '중빈 침대',
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    uniqueId: '3p290u5t0392hgnawlg',
    picture: 'http://dodam.b1nd.com/api/image/png/DW_IMG_5452932532.png',
    user: {
      uniqueId: '3p290u5t0392hgnawlg',
      name: '손민재',
      accessLevel: 1,
      proifleImage:
        'http://dodam.b1nd.com/api/image/jpg/DW_IMG_84926080205.jpg',
    },
    place: {
      name: '기숙사 507호',
      type: 1,
    },
  },
];

const Today = (): JSX.Element => {
  return (
    <>
      <S.Today>
        <S.TodayTitle>오늘의 특강</S.TodayTitle>
        <S.TodayWrap>
          {data.map((lecture) => {
            return (
              <S.TodayCard key={lecture.idx}>
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
