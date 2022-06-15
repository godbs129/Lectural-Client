import { LectureData } from '../../../types/Lecture';
import * as S from './Item.style';
import Arrow from '../../../public/assets/Arrow.svg';

const Item = ({ lecture }: { lecture: LectureData }): JSX.Element => {
  return (
    <>
      <S.ItemWrap>
        <S.ItemHeader>
          <Arrow />
        </S.ItemHeader>
      </S.ItemWrap>
    </>
  );
};

export default Item;
