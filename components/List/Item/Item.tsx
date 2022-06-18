import { LectureData, Tag } from '../../../types/Lecture';
import * as S from './Item.style';
import Arrow from '../../../public/assets/Arrow.svg';

const Item = ({ lecture }: { lecture: LectureData }): JSX.Element => {
  return (
    <>
      <S.ItemWrap>
        <S.ItemHeader>
          <Arrow />
        </S.ItemHeader>

        <S.ItemContent>
          <S.ItemContentTop>
            <S.ItemContentTopPlace>{lecture.place.name}</S.ItemContentTopPlace>

            <S.ItemContentTopTitle>{lecture.title}</S.ItemContentTopTitle>
          </S.ItemContentTop>

          <S.ItemContentBottom>
            <S.ItemContentBottomTags>
              {lecture.tags.map((tag: Tag) => {
                return <>#{tag.name} </>;
              })}
            </S.ItemContentBottomTags>
          </S.ItemContentBottom>
        </S.ItemContent>
      </S.ItemWrap>
    </>
  );
};

export default Item;
