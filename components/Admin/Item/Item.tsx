import dayjs from 'dayjs';
import { useSetRecoilState } from 'recoil';
import {
  isLectureModalOpen,
  lectureModalData,
} from '../../../store/lectureStore';
import { LectureData } from '../../../types/Lecture';
import * as S from './Item.style';

const Item = ({ lecture }: { lecture: LectureData }): JSX.Element => {
  const setModalOpen = useSetRecoilState(isLectureModalOpen);
  const setLecture = useSetRecoilState(lectureModalData);

  const onClickLecture = () => {
    setModalOpen(true);
    setLecture(lecture);
  };

  return (
    <>
      <S.AdminItemWrap>
        <S.Wrap>
          <S.AdminItemMore>
            <div
              onClick={onClickLecture}
              style={{ borderBottom: '1px solid #767676' }}
            >
              상세보기 {'>'}
            </div>
          </S.AdminItemMore>

          <S.AdminItemTitle>{lecture.title}</S.AdminItemTitle>
          <S.AdminItemContent>{lecture.content}</S.AdminItemContent>
        </S.Wrap>

        <S.AdminItemInfo>
          <S.AdminItemInfoPT>
            {lecture.place !== null ? (
              <>{lecture.place.name}</>
            ) : (
              <>아직 장소가 없어요!</>
            )}
            <br />
            {dayjs(lecture.startDate)
              .subtract(9, 'hour')
              .format('MM월 DD일 HH:mm')}{' '}
            ~ {dayjs(lecture.endDate).subtract(9, 'hour').format('HH:mm')}
          </S.AdminItemInfoPT>
        </S.AdminItemInfo>
      </S.AdminItemWrap>
    </>
  );
};

export default Item;
