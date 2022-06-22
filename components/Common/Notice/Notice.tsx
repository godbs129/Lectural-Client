import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import * as S from './Notice.style';
import Warning from '../../../public/assets/Warning.svg';

const notices = [
  `전해윤 학생의 "학교 땡땡이 꿀팁" 강의는 부적절한 주제로
  취소되었어요!`,
  `손민재 학생의 "휴대폰 안 내는 방법" 강의는 부적절한 주제로
  취소되었어요!`,
  `신중빈 학생의 "학교에서 음주하는 법" 강의는 부적절한 주제로
  취소되었어요!`,
];

const Notice = (): JSX.Element => {
  return (
    <S.NoticeWrapper>
      <S.Notice>
        <Warning />
        <S.NoticeText>
          <Splide
            options={{
              direction: 'ttb',
              height: '39px',
              type: 'loop',
              autoplay: true,
              arrows: false,
              pagination: false,
              interval: 6000,
              speed: 1000,
            }}
          >
            {notices.map((notice) => {
              return (
                <SplideSlide key={notice} style={{ lineHeight: '42px' }}>
                  {notice}
                </SplideSlide>
              );
            })}
          </Splide>
        </S.NoticeText>
      </S.Notice>
    </S.NoticeWrapper>
  );
};

export default Notice;
