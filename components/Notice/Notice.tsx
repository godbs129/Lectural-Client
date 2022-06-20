import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import * as S from './Notice.style';
import Warning from '../../public/assets/Warning.svg';

const notices = [
  `전해윤 학생의1 "급식 맛있게 먹는 법" 강의는 부적절한 주제로
  취소되었어요!`,
  `전해윤 학생의2 "급식 맛있게 먹는 법" 강의는 부적절한 주제로
  취소되었어요!`,
  `전해윤 학생의 "급식 맛있게 먹는 법" 강의는 부적절한 주제로
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
