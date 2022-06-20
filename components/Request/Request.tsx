import * as S from './Request.style';
import Plus from '../../public/assets/Plus.svg';
import { useRequest } from '../../hooks/request/useRequest';
import { useEffect, useState } from 'react';

const Request = (): JSX.Element => {
  const { getRequests } = useRequest();
  const [requests, setRequests] = useState([]);

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
          <Plus />
        </S.RequestHeader>

        <S.RequestContentWrap>
          {requests.map((request: any) => {
            return <S.Request>{request.content}</S.Request>;
          })}
        </S.RequestContentWrap>
      </S.RequestWrap>
    </>
  );
};

export default Request;
