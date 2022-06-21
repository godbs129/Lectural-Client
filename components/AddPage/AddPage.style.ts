import styled from 'styled-components';

export const AddPageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddPage = styled.div`
  width: 38%;
  margin-top: 20px;
`;

export const AddPageTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: black;
`;

export const AddPageSummary = styled.div`
  width: 100%;
  background: rgba(0, 98, 255, 0.05);
  border-radius: 10px;
  color: #0062ff;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
`;

export const AddPageInputWrap = styled.div`
  margin-top: 20px;
  width: 50%;
`;

export const AddPageInput = styled.input`
  width: 100%;
  border: 0.5px solid #000000;
  border-radius: 10px;
  height: 40px;
  margin-top: 5px;
  padding: 10px;
`;

export const AddPageDateWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;

export const DateWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const DateInput = styled.input`
  width: 95%;
  border: 0.5px solid #000000;
  border-radius: 10px;
  height: 40px;
  margin-top: 5px;
  padding: 8px;
  font-size: 12px;
`;

export const AddPageSelect = styled.select`
  width: 100%;
  border: 0.5px solid #000000;
  border-radius: 10px;
  height: 40px;
  margin-top: 5px;
  padding: 10px;
`;

export const AddPageContentWrap = styled.div`
  margin-top: 20px;
`;

export const AddPageContent = styled.textarea`
  resize: none;
  width: 100%;
  height: 177px;
  border: 0.5px solid #000000;
  border-radius: 10px;
  margin-top: 5px;
  padding: 10px;
  font-size: 15px;
`;

export const ImageUploadBtn = styled.div`
  width: 20%;
  background: rgba(0, 98, 255, 0.6);
  border-radius: 10px;
  color: white;
  height: 32px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  & > input {
    display: none;
  }
`;

export const ImageUpload = styled.input``;

export const SubmitBtn = styled.div`
  width: 28%;
  height: 45px;
  margin-top: 15px;
  border-radius: 10px;
  background: #0062ff;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
