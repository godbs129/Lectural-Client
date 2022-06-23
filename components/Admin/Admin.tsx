import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useLecture } from '../../hooks/Lecture/useLecture';
import { isLectureModalOpen, lectureModalData } from '../../store/lectureStore';
import { userAtom } from '../../store/userStore';
import { LectureData } from '../../types/Lecture';
import LectureModal from '../Common/Modal/Lecture/LectureModal';
import * as S from './Admin.style';
import Item from './Item/Item';

const AdminPage = (): JSX.Element => {
  const [select, setSelect] = useState<number>(1);
  const [lectures, setLectures] = useState([]);

  const { getAllLectures, getTodayLecture } = useLecture();

  useEffect(() => {
    const get = async () => {
      let lectures;
      if (select === 1) {
        lectures = await getAllLectures();
      } else if (select === 2) {
        lectures = (await getTodayLecture()).data;
      }

      setLectures(lectures);
    };

    get();
  }, [select]);

  const lecture = useRecoilValue(lectureModalData);
  const user = useRecoilValue(userAtom);
  const [isLectureOpen, setIsLectureOpen] = useRecoilState(isLectureModalOpen);

  return (
    <S.AdminWrap>
      {isLectureOpen && <LectureModal lecture={lecture} user={user} />}
      <S.AdminMenuWrap>
        <S.AdminMenu>
          <S.SelectedMenu
            onClick={() => {
              setSelect(1);
            }}
            select={select === 1 ? true : false}
          >
            전체
          </S.SelectedMenu>
          <S.SelectedMenu
            onClick={() => {
              setSelect(2);
            }}
            select={select === 2 ? true : false}
          >
            오늘 예정된 강의
          </S.SelectedMenu>
          <S.SelectedMenu
            onClick={() => {
              setSelect(3);
            }}
            select={select === 3 ? true : false}
          >
            위치 배정이 필요한 강의
          </S.SelectedMenu>
        </S.AdminMenu>
      </S.AdminMenuWrap>

      <S.AdminContent>
        {lectures.map((lecture: LectureData) => {
          return <Item key={lecture.idx} lecture={lecture} />;
        })}
      </S.AdminContent>
    </S.AdminWrap>
  );
};

export default AdminPage;
