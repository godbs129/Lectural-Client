import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRequest } from '../../../../hooks/request/useRequest';
import { isRequestModalOpen } from '../../../../store/requestStore';
import Modal from '../Modal';
import * as S from './RequestModal.style';
import toast from 'react-hot-toast';

const RequestModal = (): JSX.Element => {
  const [request, setRequest] = useState<string>('');
  const setIsRequestModal = useSetRecoilState(isRequestModalOpen);
  const { addRequest } = useRequest();

  const router = useRouter();

  const onClickAdd = async () => {
    const result = await addRequest(request);

    if (result.status === 201) {
      setIsRequestModal(false);
      toast.success('요청이 작성되었어요', {
        position: 'top-right',
      });
    }
  };

  return (
    <Modal width="27%" height="36%">
      <S.RequestModalWrap>
        <S.RequestModalTitle>원하는 주제가 있어요!</S.RequestModalTitle>
        <S.RequestModalContent>
          학생 전문가 특강으로 만나고 싶은 주제가 있다면 자유롭게 작성해 보세요!
        </S.RequestModalContent>

        <S.RequestModalInputWrap>
          <S.RequestModalInput
            onChange={(e) => {
              setRequest(e.target.value);
            }}
          />

          <S.RequestModalBtn onClick={onClickAdd}>작성 완료</S.RequestModalBtn>
        </S.RequestModalInputWrap>

        <S.RequestModalWarning>
          *홈 화면에서 내가 작성한 주제가 나오지 않아도 놀라지 마세요.
          <br />
          유저들의 다양한 의견 중 세 가지를 랜덤으로 보여드리는 중입니다.
        </S.RequestModalWarning>
      </S.RequestModalWrap>
    </Modal>
  );
};

export default RequestModal;
