import { useRecoilState, useRecoilValue } from 'recoil';
import { isLectureModalOpen, lectureModalData } from '../../store/lectureStore';
import { isRequestModalOpen } from '../../store/requestStore';
import { userAtom } from '../../store/userStore';
import { LectureData } from '../../types/Lecture';
import LectureModal from '../Common/Modal/Lecture/LectureModal';
import Modal from '../Common/Modal/Modal';
import RequestModal from '../Common/Modal/Request/RequestModal';
import Header from '../Header/Header';
import List from '../List/List';
import Notice from '../Notice/Notice';
import Request from '../Request/Request';
import Today from '../Today/Today';
import * as S from './MainPage.style';

const MainPage = (): JSX.Element => {
  const [isLectureOpen, setIsLectureOpen] = useRecoilState(isLectureModalOpen);
  const [isRequestOpen, setIsRequestOpen] = useRecoilState(isRequestModalOpen);
  const lecture = useRecoilValue(lectureModalData);
  const user = useRecoilValue(userAtom);

  return (
    <>
      {isLectureOpen && <LectureModal lecture={lecture} user={user} />}
      {isRequestOpen && <RequestModal />}
      <Header />
      <Notice />
      <S.MainWrap>
        <Today />
        <List />
        <Request />
      </S.MainWrap>
    </>
  );
};

export default MainPage;
