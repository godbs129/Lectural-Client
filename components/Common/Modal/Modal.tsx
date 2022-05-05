import { ReactChild, ReactChildren } from 'react';
import * as S from './Modal.style';
import Close from '../../../public/assets/Close.svg';

interface ModalProps {
  width: string;
  height: string;
  children: ReactChild | ReactChildren;
}

const Modal = ({ width, height, children }: ModalProps): JSX.Element => {
  return (
    <>
      <S.Modal>
        <S.ModalWrapper width={width} height={height}>
          <S.CloseBtn>
            <Close />
          </S.CloseBtn>
          {children}
        </S.ModalWrapper>
      </S.Modal>
    </>
  );
};

export default Modal;
