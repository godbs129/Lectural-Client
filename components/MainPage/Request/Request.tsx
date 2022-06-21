import * as S from './Request.style';
import Plus from '../../../public/assets/Plus.svg';
import { useRequest } from '../../../hooks/request/useRequest';
import { useEffect, useState } from 'react';
import { isRequestModalOpen } from '../../../store/requestStore';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../../store/userStore';
import { useRouter } from 'next/router';

const Request = (): JSX.Element => {
  const { getRequests } = useRequest();
  const [requests, setRequests] = useState([]);
  const [isRequestOpen, setIsRequestOpen] = useRecoilState(isRequestModalOpen);
  const [user, setUser] = useRecoilState(userAtom);

  const router = useRouter();

  useEffect(() => {
    const get = async () => {
      const res = await getRequests();
      setRequests(res.data.data);
    };

    get();
  }, []);

  return (
    <>
      <S.RequestWrap>
        <S.RequestHeader>
          <S.RequestTitle>유저들이 원하는 주제</S.RequestTitle>
          <S.RequestPlusIcon
            onClick={() => {
              setIsRequestOpen(true);
            }}
          >
            <Plus />
          </S.RequestPlusIcon>
        </S.RequestHeader>

        <S.RequestContentWrap>
          {requests.map((request: any) => {
            return <S.Request>{request.content}</S.Request>;
          })}
        </S.RequestContentWrap>

        {user.accessLevel === 1 ? (
          <S.RequestUnderBtn
            onClick={() => {
              router.push('/add');
            }}
          >
            특강 등록하기
          </S.RequestUnderBtn>
        ) : (
          <S.RequestUnderBtn>관리자 페이지로 가기</S.RequestUnderBtn>
        )}
      </S.RequestWrap>
    </>
  );
};

export default Request;
