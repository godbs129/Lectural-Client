import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useLecture } from '../../../hooks/Lecture/useLecture';
import {
  isLectureModalOpen,
  lectureModalData,
} from '../../../store/lectureStore';
import { LectureData } from '../../../types/Lecture';
import * as S from './Today.style';

const Today = (): JSX.Element => {
  const setModalOpen = useSetRecoilState(isLectureModalOpen);
  const setLecture = useSetRecoilState(lectureModalData);
  const [lectures, setLectures] = useState<LectureData[]>([]);

  const { getTodayLecture } = useLecture();

  useEffect(() => {
    const getLecture = async () => {
      const result = await getTodayLecture();

      setLectures(result.data);
    };

    getLecture();
  }, []);

  return (
    <>
      <S.Today>
        <S.TodayTitle>오늘의 특강</S.TodayTitle>
        <S.TodayWrap>
          {lectures.map((lecture) => {
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
                    <S.TodayCardPlace>
                      {lecture.place !== null ? (
                        <>{lecture.place.name}</>
                      ) : (
                        <>아직 장소가 없어요!</>
                      )}
                    </S.TodayCardPlace>
                    <S.TodayCardData>
                      <S.TodayCardTime>
                        {dayjs(lecture.startDate)
                          .subtract(9, 'hour')
                          .format('HH:mm')}{' '}
                        ~{' '}
                        {dayjs(lecture.endDate)
                          .subtract(9, 'hour')
                          .format('HH:mm')}
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
