import styled from 'styled-components';

export const NoticeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Notice = styled.div`
  width: 823px;
  height: 39px;
  border-radius: 10px;
  background: rgba(0, 98, 255, 0.05);
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 19px;
  }
`;

export const NoticeText = styled.div`
  font-size: 14px;
  margin-left: 14px;
  line-height: 39px;
`;
