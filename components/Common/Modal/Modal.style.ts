import styled from 'styled-components';

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 123;
  top: 0;
`;

export const ModalWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: white;
  border-radius: 20px;
  padding: 27px;
`;

export const CloseBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > svg {
    cursor: pointer;
  }
`;
