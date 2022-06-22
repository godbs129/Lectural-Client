import { LectureData, Tag } from '../../../../types/Lecture';
import * as S from './Item.style';
import Arrow from '../../../../public/assets/Arrow.svg';
import dayjs from 'dayjs';
import { useSetRecoilState } from 'recoil';
import {
  isLectureModalOpen,
  lectureModalData,
} from '../../../../store/lectureStore';

const Item = ({ lecture }: { lecture: LectureData }): JSX.Element => {
  const setModalOpen = useSetRecoilState(isLectureModalOpen);
  const setLecture = useSetRecoilState(lectureModalData);

  const onClickLecture = () => {
    setModalOpen(true);
    setLecture(lecture);
  };

  return (
    <>
      <S.ItemWrap>
        <S.ItemHeader>
          <S.ItemHeaderArrow onClick={onClickLecture}>
            <Arrow />
          </S.ItemHeaderArrow>
        </S.ItemHeader>

        <S.ItemContent>
          <S.ItemContentTop>
            <S.ItemContentTopPlace>
              {lecture.place !== null ? (
                <>{lecture.place.name}</>
              ) : (
                <>아직 장소가 없어요!</>
              )}
            </S.ItemContentTopPlace>

            <S.ItemContentTopTitle>{lecture.title}</S.ItemContentTopTitle>
          </S.ItemContentTop>

          <S.ItemContentBottom>
            <S.ItemContentBottomTags>
              {lecture.tags.map((tag: Tag) => {
                return <div key={tag.idx}>#{tag.name}&nbsp;</div>;
              })}
            </S.ItemContentBottomTags>

            <S.ItemContentBottomInfo>
              <S.ItemContentBottomInfoData>
                {lecture.user.name}
              </S.ItemContentBottomInfoData>
              <S.ItemContentBottomInfoData>
                {dayjs(lecture.startDate).format('YYYY-MM-DD HH:mm')} ~{' '}
                {dayjs(lecture.endDate).format('HH:mm')}
              </S.ItemContentBottomInfoData>
            </S.ItemContentBottomInfo>
          </S.ItemContentBottom>
        </S.ItemContent>
      </S.ItemWrap>
    </>
  );
};

export default Item;
