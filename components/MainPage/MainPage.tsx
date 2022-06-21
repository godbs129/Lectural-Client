import { useRecoilState, useRecoilValue } from 'recoil';
import { isLectureModalOpen, lectureModalData } from '../../store/lectureStore';
import { isRequestModalOpen } from '../../store/requestStore';
import { userAtom } from '../../store/userStore';
import LectureModal from '../Common/Modal/Lecture/LectureModal';
import RequestModal from '../Common/Modal/Request/RequestModal';
import List from './List/List';
import Notice from '../Common/Notice/Notice';
import Request from './Request/Request';
import Today from './Today/Today';
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
