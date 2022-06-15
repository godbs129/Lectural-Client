import { useEffect, useState } from 'react';
import { useLecture } from '../../hooks/Lecture/useLecture';
import { LectureData } from '../../types/Lecture';
import Item from './Item/Item';
import * as S from './List.style';

const List = (): JSX.Element => {
  const [lectures, setLectures] = useState([]);
  const { getAllLectures } = useLecture();

  useEffect(() => {
    const getLectures = async () => {
      const lectureData = await getAllLectures();
      setLectures(lectureData);
    };

    getLectures();
  }, []);

  return (
    <>
      <S.List>
        <S.ListTitle>전체 학생 전문가 특강</S.ListTitle>
        <S.ListWrap>
          {lectures.map((lecture: LectureData) => {
            return <Item lecture={lecture} />;
          })}
        </S.ListWrap>
      </S.List>
    </>
  );
};

export default List;
