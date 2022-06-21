import styled from 'styled-components';

export const RequestModalWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const RequestModalTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: black;
`;

export const RequestModalContent = styled.div`
  margin-top: 5px;
  color: #767676;
  font-size: 15px;
`;

export const RequestModalInputWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RequestModalInput = styled.input`
  border: 1px solid #d1d8e6;
  border-radius: 10px;
  width: 96%;
  height: 68px;
  margin-top: 15%;
  padding: 15px;
  font-size: 16px;
`;

export const RequestModalBtn = styled.div`
  width: 96%;
  height: 53px;
  border-radius: 10px;
  background: #0062ff;
  margin-top: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RequestModalWarning = styled.div`
  color: #767676;
  font-size: 14px;
  margin-top: 5%;
  margin-left: 13px;
`;
