import { ReactChild, ReactChildren } from 'react';
import * as S from './Modal.style';
import Close from '../../../public/assets/Close.svg';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  isLectureModalOpen,
  lectureModalData,
} from '../../../store/lectureStore';

interface ModalProps {
  width: string;
  height: string;
  children: ReactChild | ReactChildren;
}

const Modal = ({ width, height, children }: ModalProps): JSX.Element => {
  const setIsModal = useSetRecoilState(isLectureModalOpen);
  const resetLectureData = useResetRecoilState(lectureModalData);

  const closeModal = () => {
    setIsModal(false);
    resetLectureData();
  };

  return (
    <>
      <S.Modal>
        <S.ModalWrapper width={width} height={height}>
          <S.CloseBtn onClick={closeModal}>
            <Close />
          </S.CloseBtn>
          {children}
        </S.ModalWrapper>
      </S.Modal>
    </>
  );
};

export default Modal;
