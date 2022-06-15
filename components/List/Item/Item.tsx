import { LectureData } from '../../../types/Lecture';
import * as S from './Item.style';

const Item = ({ lecture }: { lecture: LectureData }): JSX.Element => {
  return (
    <>
      <S.ItemWrap>{lecture.content}</S.ItemWrap>
    </>
  );
};

export default Item;
