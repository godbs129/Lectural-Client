import Notice from '../Notice/Notice';
import Today from '../Today/Today';
import * as S from './MainPage.style';

const MainPage = (): JSX.Element => {
  return (
    <>
      <Notice />
      <S.MainWrap>
        <Today />
        <div
          style={{
            width: '23%',
            marginLeft: '58px',
            marginRight: '58px',
            background: 'blue',
          }}
        >
          전체 학생 전문가 특강
        </div>
        <div style={{ width: '15%', background: 'blue' }}>
          유저들이 원하는 주제
        </div>
      </S.MainWrap>
    </>
  );
};

export default MainPage;
